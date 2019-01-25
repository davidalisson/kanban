import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {MatDialog, MatDialogConfig} from '@angular/material';
import { ModalAddComponent } from '../shared/modal-add/modal-add.component';
import { MyServiceService } from '../shared/services/my-service.service';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  todo: [{
    nome: '',
    descricao: ''
  }];

  doing: [{
    nome: '',
    descricao: ''
  }];

  done = [{
    nome: '',
    descricao: ''
  }];


  constructor(private dialog: MatDialog, private myService: MyServiceService) {
    this.todo = this.myService.getTodo();
    this.doing = this.myService.getDoing();
    this.done = this.myService.getDone();
  }

  ngOnInit() {

  }

  getTodos() {

    console.log(this.todo);
  }

  openDialog(type, item) {
    console.log('item', item);
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;



    dialogConfig.data = {
      type: type,
      item: item
    };

    this.dialog.open(ModalAddComponent, dialogConfig);
}

deleteCardTodo(item) {
  let obj;
  obj = this.todo.find(x => x.nome === item.nome);
  this.todo.splice(item, 1);
}
deleteCardDoing(item) {
  let obj;
  obj = this.doing.find(x => x.nome === item.nome);
  this.doing.splice(item, 1);
}
deleteCardDone(item) {
  let obj;
  obj = this.done.find(x => x.nome === item.nome);
  this.done.splice(item, 1);
}


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
