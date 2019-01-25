import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {MatDialog, MatDialogConfig} from '@angular/material';
import { ModalAddComponent } from '../shared/modal-add/modal-add.component';
import { MyServiceService } from '../shared/services/my-service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  boards: [];

  constructor(private myService: MyServiceService) {

  }

  ngOnInit() {

  }

  getBoards() {
    this.boards = this.myService.getBoard();
  }

  newBoard() {}

}
