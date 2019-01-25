import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';


@Injectable()
export class MyServiceService {



  todo: any = [{
    nome: '',
    descricao: ''
  }];
  doing: any = [{
    nome: '',
    descricao: ''
  }];
  done: any = [{
    nome: '',
    descricao: ''
  }];

  board: any = [{}];

  private subject = new Subject<any>();
  private options: any;

  constructor(private api: ApiService,
    private http: HttpClient) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    this.options = {
      headers: headers
    };
  }

  getTodo() {
    return this.todo;
  }

  setTodo(todo) {
    this.todo.push(todo);
  }

  getDoing() {
    return this.doing;
  }

  setDoing(doing) {
    this.doing.push(doing);
  }

  getDone() {
    return this.done;
  }

  setDone(done) {
    this.done.push(done);
  }

  setBoard(board) {
    this.board.push(board);
  }
  getBoard() {
    return this.board;
  }

  getCard(id) {
    return this.http.get(
      this.api.getBaseUrl() + 'card/getById' + id,
      this.api.getOptions());
  }
  saveCard(id) {
    return this.http.get(
      this.api.getBaseUrl() + 'card/save' + id,
      this.api.getOptions());
  }


  sendMessage(message: any) {
    this.subject.next(message);
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
