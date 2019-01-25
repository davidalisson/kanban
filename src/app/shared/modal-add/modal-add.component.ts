import { Component, OnInit } from '@angular/core';
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


  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<ModalAddComponent>,
    private myService: MyServiceService) {

  }
  ngOnInit() {
  }

  save() {
    if (this.card.descricao !== '' && this.card.nome !== '') {
      this.myService.setTodo(this.card);
    }
    this.dialogRef.close();

}

close() {
    this.dialogRef.close();
}

}
