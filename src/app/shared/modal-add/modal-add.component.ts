import { Component,  Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {MyServiceService} from '../services/my-service.service';

/* import * as moment from 'moment'; */


@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.css']
})
export class ModalAddComponent implements OnInit {

/* form: FormGroup; */
card: any = {
  descricao: '',
  nome: ''
};
type;
editar = false;
objeto: any = {
  descricao: '',
  nome: ''
};

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<ModalAddComponent>,
    private myService: MyServiceService,  @Inject(MAT_DIALOG_DATA) data) {
      this.type = data.type;
      /* this.objeto = data.objeto; */
      if (data.item) {
        this.card = data.item;
        this.editar = true;
      }
  }
  ngOnInit() {
  }

  save() {
    if (this.card.descricao !== '' && this.card.nome !== '') {
      if (this.type === 'todo') {
      this.myService.setTodo(this.card);
      } if (this.type === 'doing') {
        this.myService.setDoing(this.card);
      } if (this.type === 'done') {
        this.myService.setDone(this.card);
      }
      if (this.type === 'updateTodo' ) {
        this.myService.deleteTodo(this.card);
        this.myService.setTodo(this.card);
      }if (this.type === 'updateDoing' ) {
        this.myService.deleteDoing(this.card);
        this.myService.setDoing(this.card);
      }if (this.type === 'updateDone' ) {
        this.myService.deleteDone(this.card);
        this.myService.setDone(this.card);
      }

    }
    this.dialogRef.close();

}

close() {
    this.dialogRef.close();
}

}
