import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiService {


  private url  = 'http://localhost:8080/Kanban/api/';

  private options;

  constructor(private http: HttpClient) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic Y2xpZW50ZWFwcDpsMWcxbnYxc3Q0');

    this.options = {
      headers: headers
    };
  }
  public getBaseUrl() {
    return this.url;
  }

  public getOptions() {
    return this.options;
  }

  public normalizeFilter(filter: any[]) {
    let filterNormalized = '?';

    for (const key in filter) {
      if (filter[key]) {
        filterNormalized += key + '=' + filter[key] + '&';
      }
    }
    return filterNormalized;
  }

  public normalizeFormData(data: any[]) {
    let dataNormalized = '';

    for (const key in data) {
      if (data[key]) {
        dataNormalized += key + '=' + data[key] + '&';
      }
    }

    return dataNormalized;
  }
}
