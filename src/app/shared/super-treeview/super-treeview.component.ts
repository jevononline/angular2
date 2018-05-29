
import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy, Input, Output, ViewChild, EventEmitter, Optional } from '@angular/core';
import { TreeComponent, TreeNode, IActionMapping, TREE_ACTIONS, KEYS } from 'angular-tree-component';

import { TreeviewService } from '../../core/treeview/treeview.service';


export class SuperTreeviewComponent implements OnInit, OnDestroy {

  options: any = {

    actionMapping: {
      mouse: {
        click: this.toggleSelection.bind(this),
        expanderClick: this.clickExpander.bind(this)
      },
      keys: {
        [KEYS.ENTER]: this.toggleSelection.bind(this),
        [KEYS.SPACE]: this.toggleSelection.bind(this)
      }
    }
    // animateExpand: true
  };

  @ViewChild('tree')
  tree: TreeComponent;

  nodes: any[];

  @Input()
  autoActivate = false;

  // 单个
  @Input()
  activated: any;


  @Input()
  mode: 'management' | 'view' = 'management';

  @Output()
  activate = new EventEmitter<any>();

  @Output()
  moveNode = new EventEmitter<any>();

  subsrciption: Subscription;

  constructor(
    @Optional() public treeviewService: TreeviewService
  ) {

  }

  ngOnInit() {
    if (this.mode === 'management') {
      this.options.allowDrag = (node) => node.data.level > 1;
      this.options.allowDrop = (element, { parent, index }) => {
        return !!parent.parent;
      };
    }
    if (this.treeviewService) {
      this.subsrciption = this.treeviewService.view.subscribe(() => {
        this.getData();
      });
    }
  }

  ngOnDestroy() {
    if (this.subsrciption) {
      this.subsrciption.unsubscribe();
    }
  }

  getData() {
    return Promise.resolve();
  }

  onInitialized() {
    this.getData().then(() => {
      setTimeout(() => {
        if (this.nodes.length > 0) {
          if (this.autoActivate) {

            if (!this.activated) {
              if (this.autoActivate) {
                this.tree.treeModel.getFirstRoot().setActiveAndVisible().expand();
              }
            } else {


              this.tree.treeModel.getNodeById(this.activated.id).setActiveAndVisible().expand();

            }
          }
        }
      });
    });
  }

  toggleSelection(tree, node, event) {
    if (!tree.activeNodeIds[node.id]) {
      TREE_ACTIONS.TOGGLE_SELECTED(tree, node, event);
    }
  }

  clickExpander(tree, node, event) {
    event.stopPropagation();
    TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, event);
  }

  onActivate(event) {
    this.activate.emit(event.node);
  }




}

