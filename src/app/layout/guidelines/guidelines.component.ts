import { Component, OnInit, ViewChild, ElementRef, Input, EventEmitter, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';

import { APP_CONFIG, AppConfig } from '../../core/app-config';
import { AuthService } from '../../core/auth/auth.service';
import { ConfirmDialogComponent, ImportDialogComponent, TableDataSource } from '../../shared/';
import { GuidelineCategory } from './guideline-categories/guideline-category';
import { GuidelinesService } from './guidelines.service';
import { Guideline } from './guideline';


@Component({
	selector: 'app-guidelines',
	templateUrl: './guidelines.component.html',
	styleUrls: ['./guidelines.component.scss']
})
export class GuidelinesComponent implements OnInit {

	displayedColumns = [];

	@ViewChild(MatPaginator)
	paginator: MatPaginator;

	@ViewChild(MatSort)
	sort: MatSort;

	@ViewChild('keyword')
	keyword: ElementRef;

	categories: GuidelineCategory[] = [];

	dataSource: TableDataSource<Guideline>;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private dialog: MatDialog,
		private snackBar: MatSnackBar,
		@Inject(APP_CONFIG) public appConfig: AppConfig,
		public authService: AuthService,
		private guidelinesService: GuidelinesService
	) {

		this.categories = this.getCategories();

	}

	getCategories() {
		let categories = this.route.snapshot.params.categories;
		if (categories) {
			return categories.split(',').map(item => ({ id: +item }));
		} else {
			return [];
		}
	}

	ngOnInit() {
		this.displayedColumns = ['id', 'timeSpan', 'category', 'title', 'actions'];

		this.dataSource = new TableDataSource({
			get: (tableQuery) => {
				return this.guidelinesService.get({
					...tableQuery,
					keyword: this.keyword.nativeElement.value,
					categories: this.categories.map(item => item.id)
				});
			}
		}, this.paginator, this.sort);

		this.route.params.subscribe(() => {

			this.categories = this.getCategories();
			this.dataSource.refresh();

		})

		Observable.fromEvent(this.keyword.nativeElement, 'keyup')
			.filter((e: KeyboardEvent) => e.keyCode == 13)
			.subscribe(() => {
				this.dataSource.refresh();
			});
	}

	openImportDialog() {
		let dialogRef = this.dialog.open(ImportDialogComponent, {
			data: {
				filename: '方针目标模板.xlsx',
				ticket: 'ZGF0YS1pbXBvcnQtdGVtcGxhdGVzL+aWuemSiOebruagh+aooeadvy54bHN4'
			}
		});
		dialogRef.afterClosed().subscribe((result) => {
			if (result) {
				this.guidelinesService.import(result).subscribe(() => {
					this.dataSource.refresh();
					this.snackBar.open('导入成功', null, { duration: 3000 });
				}, () => {
					this.snackBar.open('导入失败', null, { duration: 3000, extraClasses: ['warn'] });
				});
			}
		});
	}

	openDeletionDialog(item) {
		let dialogRef = this.dialog.open(ConfirmDialogComponent, {
			data: { id: 'delete', content: item.title }
		});
		dialogRef.afterClosed().subscribe((result) => {
			if (result) {
				this.guidelinesService.delete(item.id).subscribe(() => {
					this.dataSource.refresh();
					this.snackBar.open(`“${item.title}”已删除！`, null, {
						duration: 2000
					});
				});
			}
		});
	}

	onCategorySelectClose(event) {
		if (event.changed) {
			this.router.navigate(['./', { categories: event.value.map(item => item.id).toString() }])
		}
	}
}
