import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatRippleModule} from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BoardComponent } from './board/board.component';
import { ModalAddComponent } from './shared/modal-add/modal-add.component';
import { ModalRemoveComponent } from './shared/modal-remove/modal-remove.component';
import {ApiService} from './shared/services/api.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MyServiceService} from './shared/services/my-service.service';
import { HttpClientModule } from '@angular/common/http';

import {MatButtonModule, MatInputModule, MatCheckboxModule, MatDialogModule, MatListModule, MatToolbarModule} from '@angular/material';
import { ModalAddBoardComponent } from './shared/modal-add-board/modal-add-board.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BoardComponent,
    ModalAddComponent,
    ModalRemoveComponent,
    ModalAddBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    DragDropModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [
    ApiService,
    MyServiceService
  ],
  exports:
  [
    BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatDialogModule,  FormsModule,
    ReactiveFormsModule, ModalAddComponent,
    ModalRemoveComponent, ModalAddBoardComponent, MatListModule, MatToolbarModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalAddComponent, ModalRemoveComponent, ModalAddBoardComponent]
})
export class AppModule { }
