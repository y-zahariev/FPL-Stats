import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FplService {
  private apiUrl = '/api/bootstrap-static/';

  constructor(private http: HttpClient) {}

  getFplData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}