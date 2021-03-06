import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable()
export class MyServiceService {
  todo: any = [];
  doing: any = [];
  done: any = [];

  board: any = [
    {
      nome: ''
    }
  ];

  private subject = new Subject<any>();
  private options: any;

  constructor(private api: ApiService, private http: HttpClient) {
    let headers = new HttpHeaders();
    headers = headers.append(
      'Content-Type',
      'application/x-www-form-urlencoded; charset=UTF-8'
    );

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
  deleteTodo(item) {
    let obj;
    obj = this.todo.find(x => x.nome === item.nome);
    console.log('obj---------------------', obj);
  }
  deleteDoing(item) {
    let obj;
    obj = this.doing.find(x => x.nome === item.nome);
    console.log('obj---------------------', obj);
  }
  deleteDone(item) {
    let obj;
    obj = this.done.find(x => x.nome === item.nome);
    console.log('obj---------------------', obj);
  }

  getCard(id) {
    return this.http.get(
      this.api.getBaseUrl() + 'card/getById' + id,
      this.api.getOptions()
    );
  }
  saveCard(card) {
    return this.http.post(
      this.api.getBaseUrl() + 'card/save', card,
      this.api.getOptions()
    );
  }
  getBoards() {
    return this.http.get(
      this.api.getBaseUrl() + 'board/getAll',
      this.api.getOptions()
    );
  }
  SetBoards(board) {
    return this.http.post(
      this.api.getBaseUrl() + 'board/save', board,
      this.api.getOptions()
    );
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
