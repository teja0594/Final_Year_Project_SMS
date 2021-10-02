import { Injectable } from '@angular/core';
import {Subject,BehaviorSubject} from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8080/api/themes';
@Injectable({
  providedIn: 'root'
})
export class SettingserviceService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  findByTitle(themeid): Observable<any> {
    return this.http.get(`${baseUrl}?themeid=${themeid}`);
  }
  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  public editDataDetails: any = [];
private messageSource = new  BehaviorSubject(this.editDataDetails);
currentMessage = this.messageSource.asObservable();
changeTheme(message: string ) {
  this.messageSource.next(message)
  }
  public editDataDetails1: any = [];
  private messageSource1 = new  BehaviorSubject(this.editDataDetails1);
  currentMessage1 = this.messageSource1.asObservable();
  changeMessage(message1: string) {
    this.messageSource1.next(message1)
  }
}
