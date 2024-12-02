import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Makes the service available application-wide
})
export class RegisterService {
  private apiUrl = 'http://localhost:5000'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  // Example API Call to Register a User
  registerUser(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }


  fetchUsers(): Observable<any> {
    //return this.http.get<any[]>(this.apiUrl);
    return this.http.get(`${this.apiUrl}/users`);
  }
}

