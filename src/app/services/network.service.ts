import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private http: HttpClient) { }

  getAllRecordsByPost(url: any, params: any) {
    return this.http.post<any>(url, params)
      .pipe(map(data => {
        return data;
      }));
  }

}
