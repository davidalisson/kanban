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

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<ModalAddComponent>,
    private myService: MyServiceService,  @Inject(MAT_DIALOG_DATA) data) {
      this.type = data.type;
  }
  ngOnInit() {
  }

  save() {
    if (this.card.descricao !== '' && this.card.nome !== '') {
      if (this.type === 'todo') {
      this.myService.setTodo(this.card);
      } else if (this.type === 'doing') {
        this.myService.setDoing(this.card);
      } else if (this.type === 'done') {
        this.myService.setDone(this.card);
      }
    }
    this.dialogRef.close();

}

close() {
    this.dialogRef.close();
}

}
