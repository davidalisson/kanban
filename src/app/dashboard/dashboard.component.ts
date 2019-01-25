import { Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {MatDialog, MatDialogConfig} from '@angular/material';
import { ModalAddComponent } from '../shared/modal-add/modal-add.component';
import { MyServiceService } from '../shared/services/my-service.service';
import {ModalAddBoardComponent} from '../shared/modal-add-board/modal-add-board.component';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {


  boards: [{}];

  constructor(private myService: MyServiceService, private dialog: MatDialog, private router: Router) {
    this.boards = this.myService.getBoard();
  }

  ngOnInit() {

  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(ModalAddBoardComponent, dialogConfig);
}

  openBoard() {
    this.router.navigate(['/board']);
  }



  newBoard() {}

}
