import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {MyServiceService} from '../services/my-service.service';


@Component({
  selector: 'app-modal-add-board',
  templateUrl: './modal-add-board.component.html',
  styleUrls: ['./modal-add-board.component.css']
})
export class ModalAddBoardComponent implements OnInit {

  board: any = {
    nome: ''
  };

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<ModalAddBoardComponent>,
    private myService: MyServiceService) { }

  ngOnInit() {
  }


  save() {
    if (this.board.nome !== '') {
      this.myService.setBoard(this.board);
    }
    this.dialogRef.close();

}

close() {
    this.dialogRef.close();
}

}
