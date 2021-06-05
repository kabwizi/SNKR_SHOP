import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ColorsService {
  constructor(private http: HttpClient) {}
  getAllColors(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:3000/colors');
  }
}
