import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class userData {
  private apiURL = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) {}
  getUsers(): Observable<any[]> {
    return this.http.get<{ users: any[] }>(this.apiURL).pipe(map((response) => response.users));
  }
}
