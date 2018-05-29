import * as Konva from 'konva';
import { Injectable, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { TreeviewService } from '../../../core/treeview/treeview.service';
import { StandardSystem } from '../../system-management/standard-system/standard-system';


@Injectable()
export class SystemMapService {

  container: ElementRef;

  stageWidth: number;
  stageHeight: number;
  stage: Konva.Stage;
  layer: Konva.Layer;

  blockWidth = 200;
  blockHeight = 30;

  standardSystems: StandardSystem[] = [];
  forPost = false;

  constructor(private router: Router, private treeviewService: TreeviewService) { }

  buildStage({ container, stageWith, stageHeight, standardSystems }) {
    this.container = container;
    this.stageWidth = stageWith;
    this.stageHeight = stageHeight;
    this.standardSystems = standardSystems;

    this.stage = new Konva.Stage({
      container: this.container.nativeElement,
      width: this.stageWidth,
      height: this.stageHeight,
    });

  }

  buildBlock(
    { x, y, width, height, text, style }:
      { x: number, y: number, width: number, height: number, text: string, style: string }
  ) {

    let block = new Konva.Group({
      x: x,
      y: y,
      clipFunc: (ctx) => {
        ctx.rect(0, 0, width, height);
      }
    });

    let rect = new Konva.Rect({ x: 0, y: 0, width, height, fill: '#fff', stroke: style, strokeWidth: 1 });

    let txt = new Konva.Text({
      x: 0,
      y: height / 2,
      width: width,
      fontSize: 12,
      text: text,
      fill: '#333',
      wrap: 'none',
      align: 'center'
    });

    txt.offsetY(txt.getHeight() / 2);

    block.on('mouseenter', (evt) => {
      this.stage.container().style.cursor = 'pointer';
      rect.fill(style);
      txt.fill('#fff');
      block.draw();
    });
    block.on('mouseleave', (evt) => {
      this.stage.container().style.cursor = 'default';
      rect.fill('#fff');
      txt.fill('#333');
      block.draw();
    });

    block.add(rect);
    block.add(txt);

    return block;
  }

  renderDocumentsPart(group1: Konva.Group) {

    const blockWidth = this.blockWidth;
    const blockHeight = this.blockHeight;
    const style = '#3db8c1';

    let coors = [[0, 0], [(group1.getWidth() - blockWidth) / 2, 0], [group1.getWidth() - blockWidth, 0]];
    let modules = [
      { text: '企业方针、目标', link: ['/guidelines'] },
      { text: '企业贯彻的法律、法规和其他要求', link: ['/superior-documents'] },
      { text: '企业适用的法律、法规和其他要求', link: ['/regulations'] }
    ];

    let group1Children = [];
    modules.forEach((item, i) => {
      let block = this.buildBlock({
        x: coors[i][0],
        y: coors[i][1],
        width: blockWidth,
        height: blockHeight,
        style: style,
        text: item.text,

      });
      block.on('click', () => {
        this.router.navigate(item.link);
      })
      group1Children.push(block);
    });

    group1.add(new Konva.Line({
      points: [group1Children[0].x(), group1Children[0].y() + blockHeight / 2, group1Children[2].x(), group1Children[2].y() + blockHeight / 2],
      stroke: style,
      strokeWidth: 1
    }));

    group1Children.forEach(group => {
      group1.add(group);
    });

    return group1;
  }

  buildSingleStandardSystemBlock(standardSystem, { x, y, width, height, style }) {
    let block = new Konva.Group({
      x: x,
      y: y,
      clipFunc: (ctx) => {
        ctx.rect(0, 0, width, height);
      }
    });

    let rect = new Konva.Rect({ x: 0, y: 0, width, height, fill: '#fff', stroke: style, strokeWidth: 1 });
    block.add(rect);

    let headerHeight = 21;

    let txt1 = new Konva.Text({
      x: 0,
      y: headerHeight / 2,
      width: width,
      fontSize: 12,
      text: standardSystem.structureNo,
      fill: '#333',
      wrap: 'none',
      align: 'center'
    });
    txt1.offsetY(txt1.getHeight() / 2);
    block.add(txt1);

    let line = new Konva.Line({
      points: [0, headerHeight, width, headerHeight],
      stroke: style,
      strokeWidth: 1
    });
    block.add(line);

    let txt2 = new Konva.Text({
      x: width / 2,
      y: headerHeight + (height - headerHeight) / 2,
      width: standardSystem.level === 2 ? width : 12,
      text: standardSystem.name,
      fill: '#333',
      align: 'center'
    });
    txt2.offsetX(txt2.getWidth() / 2).offsetY(txt2.getHeight() / 2);
    block.add(txt2);

    block.on('mouseenter', (evt) => {
      this.stage.container().style.cursor = 'pointer';
      rect.fill(style);
      txt1.fill('#fff');
      txt2.fill('#fff');
      line.stroke('#fff');
      block.draw();
    });
    block.on('mouseleave', (evt) => {
      this.stage.container().style.cursor = 'default';
      rect.fill('#fff');
      txt1.fill('#333');
      txt2.fill('#333');
      line.stroke(style);
      block.draw();
    });

    return block;
  }

  buildManyStandardSystemBlock(standardSystem: StandardSystem[], { x, y, width, height, style }: { x: number, y: number, width: number, height: number, style: string }) {

    let txtHeight = 0;
    let txtWidth = 0;
    let block = new Konva.Group({
      x: x,
      y: y,
      width: width,
      height: height,
      clipFunc: (ctx) => {
        ctx.rect(0, 0, width, height);
      }
    });
    let rect = new Konva.Rect({ x: 0, y: 0, width, height, fill: '#fff', stroke: style, strokeWidth: 1 });
    block.add(rect);


    let group = new Konva.Group({
      x: 0,
      y: 0
    });


    let length = standardSystem.length;
    for (let i = 0; i < length; i++) {
      let txt = new Konva.Text({
        x: 0,
        y: txtHeight,
        width: width,
        text: `${standardSystem[i].structureNo} ${standardSystem[i].name}`,
        fill: '#333',
        padding: 3,
        wrap: 'char'
      });
      if (txt.width() > txtWidth) {
        txtWidth = txt.width();
      }
      txtHeight += txt.height();
      txt.on('mouseenter', (evt) => {
        this.stage.container().style.cursor = 'pointer';
        txt.fill(style);
        block.draw();
      });
      txt.on('mouseleave', (evt) => {
        this.stage.container().style.cursor = 'default';
        txt.fill('#333');
        block.draw();
      });
      txt.on('click', (evt) => {
        this.gotoStandards(standardSystem[i]);
      });
      group.add(txt);
    }
    block.add(group);


    group.draggable(true);
    group.dragBoundFunc(function (pos) {
      let dh = height - txtHeight;
      let y = pos.y;
      let yy = pos.y - block.getAbsolutePosition().y;
      if (dh < 0) {
        if (yy > 0) {
          y = block.getAbsolutePosition().y;
        } else if (yy < dh) {
          y = block.getAbsolutePosition().y + dh;
        }
      } else {
        if (yy < 0) {
          y = block.getAbsolutePosition().y;
        } else if (yy > dh) {
          y = block.getAbsolutePosition().y + dh;
        }
      }

      return {
        x: this.getAbsolutePosition().x,
        y: y
      };
    });

    return block;
  }

  buildL2StandardSystemBlock(standardSystem, { x, y, width, height, style }: { x: number, y: number, width: number, height: number, style: string }) {
    let block = new Konva.Group({
      x: x,
      y: y
    });

    let rect1 = this.buildSingleStandardSystemBlock(standardSystem, { x: 0, y: 0, width, height, style });
    block.add(rect1);

    return block;
  }

  renderStandardSystemTreePart(standardSystem) {

    this.clear();

    let veticalCap = 40;
    let horizontalCap = 20;

    let l1BlockWidth = 200;
    let l1BlockHeight = 54;

    let l2BlockWidth = 72;
    let l2BlockHeight = 200;

    let l3BlockWidth = 72;
    let l3BlockHeight = 240;

    let length = standardSystem.children.length;

    let canvasWidth = (horizontalCap + l2BlockWidth) * length - horizontalCap;
    let canvasHeight = l1BlockHeight;

    if (length > 0) {
      canvasHeight += veticalCap + l2BlockHeight;
      if (standardSystem.children.some(item => item.children.length > 0)) {
        canvasHeight += veticalCap + l3BlockHeight;
      }
    }

    const style = '#297cbb';

    let textWidth = 100;
    let txt = new Konva.Text({
      x: this.stageWidth - textWidth,
      y: 0,
      width: textWidth,
      fontSize: 12,
      text: '返回上一级',
      fill: style,
      wrap: 'none',
      align: 'center'
    });

    txt.on('mouseenter', (evt) => {
      this.stage.container().style.cursor = 'pointer';
    });
    txt.on('mouseleave', (evt) => {
      this.stage.container().style.cursor = 'default';
    });

    txt.on('click', () => {
      this.render();
    });


    let group = new Konva.Group({
      x: -(canvasWidth - this.stageWidth) / 2,
      y: 0,
      width: canvasWidth,
      height: canvasHeight,
      draggable: true,
      dragBoundFunc: (pos) => {
        let x = pos.x;
        let dw = this.stageWidth - canvasWidth;
        if (dw < 0) {
          if (x > 0) {
            x = 0;
          } else if (x < dw) {
            x = dw
          }
        } else {
          if (x < 0) {
            x = 0
          } else if (x > dw) {
            x = dw;
          }
        }

        let y = pos.y;
        let dh = this.stageHeight - canvasHeight;
        if (dh < 0) {
          if (y > 0) {
            y = 0;
          } else if (y < dh) {
            y = dh;
          }
        } else {
          if (y < 0) {
            y = 0;
          } else if (y > dh) {
            y = dh;
          }
        }
        return {
          x: x,
          y: y
        }
      }
    });
    let rect = new Konva.Rect({ x: 0, y: 0, width: Math.max(this.stageWidth, canvasWidth), height: Math.max(this.stageHeight, canvasHeight), fill: '#fff' });
    // group.on('dblclick', () => {
    //   if (this.forPost) {
    //     this.renderForPost();
    //   } else {
    //     this.render();
    //   }
    // });
    group.add(rect);

    let l1Block = this.buildSingleStandardSystemBlock(standardSystem, {
      x: (canvasWidth - l1BlockWidth) / 2,
      y: 0,
      width: l1BlockWidth,
      height: l1BlockHeight,
      style: style
    });

    l1Block.on('click', () => {
      this.gotoStandards(standardSystem);
    });

    group.add(l1Block);
    if (length > 0) {
      let children = standardSystem.children;
      let line1 = new Konva.Line({
        points: [l1Block.x() + l1BlockWidth / 2, l1Block.y() + l1BlockHeight, l1Block.x() + l1BlockWidth / 2, l1Block.y() + l1BlockHeight + veticalCap / 2],
        stroke: style,
        strokeWidth: 1
      });
      group.add(line1);
      let line1_2 = new Konva.Line({
        points: [l2BlockWidth / 2, l1Block.y() + l1BlockHeight + veticalCap / 2, (length - 1) * (l2BlockWidth + horizontalCap) + l2BlockWidth / 2, l1Block.y() + l1BlockHeight + veticalCap / 2],
        stroke: style,
        strokeWidth: 1
      });
      group.add(line1_2);
      for (let i = 0; i < length; i++) {
        let line2 = new Konva.Line({
          points: [i * (l2BlockWidth + horizontalCap) + l2BlockWidth / 2, l1BlockHeight + veticalCap, i * (l2BlockWidth + horizontalCap) + l2BlockWidth / 2, l1BlockHeight + veticalCap / 2],
          stroke: style,
          strokeWidth: 1
        });
        group.add(line2);
        let z = this.buildL2StandardSystemBlock(children[i], {
          x: i * (l2BlockWidth + horizontalCap),
          y: l1BlockHeight + veticalCap,
          width: l2BlockWidth,
          height: l2BlockHeight,
          style
        });
        z.on('click', () => {
          this.gotoStandards(children[i]);
        });
        if (children[i].children.length > 0) {
          let line3 = new Konva.Line({
            points: [
              i * (l2BlockWidth + horizontalCap) + l2BlockWidth / 2,
              l1BlockHeight + veticalCap + l2BlockHeight,
              i * (l2BlockWidth + horizontalCap) + l3BlockWidth / 2,
              l1BlockHeight + veticalCap + l2BlockHeight + veticalCap
            ],
            stroke: style,
            strokeWidth: 1
          });
          group.add(line3);
          let x = this.buildManyStandardSystemBlock(children[i].children,
            {
              x: i * (l2BlockWidth + horizontalCap),
              y: l1BlockHeight + veticalCap + l2BlockHeight + veticalCap,
              width: l3BlockWidth,
              height: l3BlockHeight,
              style
            });
          group.add(x);
        }
        group.add(z);
      }

    }


    this.layer.add(group);
    this.layer.add(txt);
    this.layer.draw();
  }

  renderStandardSystemPart(group2: Konva.Group) {

    const blockWidth = this.blockWidth;
    const blockHeight = this.blockHeight;
    const style = '#297cbb';
    const r = blockHeight * 3;

    let box2 = new Konva.Rect({
      x: 0,
      y: 0,
      width: group2.getWidth(),
      height: group2.getHeight(),
      stroke: style,
      strokeWidth: 1,
      dash: [5],
      dashEnabled: true
    });
    group2.add(box2);

    let box3 = new Konva.Rect({
      x: group2.getWidth() / 2,
      y: group2.getHeight() / 2,
      width: 4.8 * r,
      height: 3 * blockHeight,
      fill: '#fff',
      stroke: style,
      strokeWidth: 1
    });
    box3.offset({ x: box3.getWidth() / 2, y: box3.getHeight() / 2 });

    group2.add(box3);

    let txt2 = new Konva.Text({
      x: group2.getWidth() / 2,
      y: group2.getHeight() / 2,
      fontSize: 14,
      text: '企业标准体系',
      fill: '#666',
      align: 'center'
    });

    txt2.offset({ x: txt2.getWidth() / 2, y: txt2.getHeight() / 2 });
    group2.add(txt2);

    let standardSystems = this.standardSystems[0].children.slice(0, 4);
    if (standardSystems.length > 0) {
      let r = 90;

      let coors = [[0, -r], [-r * 2.4, 0], [r * 2.4, 0], [0, r]];

      for (let i = 0; i < standardSystems.length; i++) {
        let item = standardSystems[i];
        let x = coors[i][0];
        let y = coors[i][1];
        let block = this.buildBlock({
          x: x + group2.getWidth() / 2,
          y: y + group2.getHeight() / 2,
          width: blockWidth,
          height: blockHeight,
          text: `${item.structureNo} ${item.name}`,
          style: style
        });
        block.offset({ x: blockWidth / 2, y: blockHeight / 2 });
        if (i === 0 || i === 3) {
          let line = new Konva.Line({
            points: [block.x() + block.getWidth() / 2, block.y(), block.x() + block.getWidth() / 2, block.y() - 1.5 * blockHeight * (Math.abs(y) / y)],
            stroke: style,
            strokeWidth: 1
          });
          group2.add(line);
        }
        block.on('click', () => {
          if(this.forPost){
            this.gotoStandards(standardSystems[i]);
          }else{
            this.renderStandardSystemTreePart(standardSystems[i]);
          }
        });
        group2.add(block);
      }

    }
  }

  renderForPost() {
    this.clear();
    this.forPost = true;
    let group2 = new Konva.Group({
      x: 0,
      y: 0,
      width: this.stageWidth,
      height: this.stageHeight,
    });

    this.renderStandardSystemPart(group2);

    this.layer.add(group2);

    this.resize();
  }

  render() {
    this.clear();
    this.forPost = false;
    let stageWidth = this.stageWidth;
    let stageHeight = this.stageHeight;

    const blockWidth = this.blockWidth;
    const blockHeight = this.blockHeight;
    const cap = 60;
    const lineStyle = '#fdbe2c';

    let group1 = new Konva.Group({
      x: 0,
      y: 0,
      width: stageWidth,
      height: blockHeight
    });

    this.renderDocumentsPart(group1);

    this.layer.add(new Konva.Line({
      points: [group1.x() + group1.getWidth() / 2, group1.y(), group1.x() + group1.getWidth() / 2, group1.y() + blockHeight + cap],
      stroke: lineStyle,
      strokeWidth: 1
    }));

    this.layer.add(new Konva.Line({
      points: [
        group1.x() + blockWidth / 2, group1.y() + blockHeight,
        group1.x() + blockWidth / 2, group1.y() + blockHeight + cap / 2,
        group1.x() + group1.getWidth() / 2 - blockWidth * 0.25, group1.y() + blockHeight + cap / 2,
        group1.x() + group1.getWidth() / 2 - blockWidth * 0.25, group1.y() + blockHeight + cap
      ],
      stroke: lineStyle,
      strokeWidth: 1,
      dash: [3],
      dashEnabled: true
    }));

    this.layer.add(new Konva.Line({
      points: [
        group1.x() + group1.getWidth() - blockWidth / 2, group1.y() + blockHeight,
        group1.x() + group1.getWidth() - blockWidth / 2, group1.y() + blockHeight + cap / 2,
        group1.x() + group1.getWidth() / 2 + blockWidth * 0.25, group1.y() + blockHeight + cap / 2,
        group1.x() + group1.getWidth() / 2 + blockWidth * 0.25, group1.y() + blockHeight + cap
      ],
      stroke: lineStyle,
      strokeWidth: 1,
      dash: [3],
      dashEnabled: true
    }));

    this.layer.add(group1);

    let group2 = new Konva.Group({
      x: 0,
      y: blockHeight + cap,
      width: stageWidth,
      height: stageHeight - blockHeight - cap,
    });

    this.renderStandardSystemPart(group2);

    this.layer.add(group2);



    this.resize();

  }

  gotoStandards(standardSystem) {
    this.treeviewService.activated = { id: standardSystem.id };
    this.router.navigate(['/standard-management/standards', { view: this.forPost ? 1 : 0 }]);
  }

  clear() {

    if (this.layer) {
      this.layer.destroy();
    }
    this.layer = new Konva.Layer();
    this.stage.add(this.layer);
    // this.stage.clearCache();

  }

  resize() {
    let scale = this.container.nativeElement.offsetWidth / this.stageWidth;
    this.stage.width(this.stageWidth * scale);
    this.stage.height(this.stageHeight);
    this.stage.scale({ x: scale, y: 1 });
    this.stage.draw();
  }
}
