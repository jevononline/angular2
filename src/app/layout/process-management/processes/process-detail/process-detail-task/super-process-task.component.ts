import { OnInit, Input} from '@angular/core';

export class SuperProcessDetailTaskComponent implements OnInit{

  @Input()
  task: any;

  constructor() { }

  ngOnInit() { }

}