import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proprietaire } from './proprietaire.model';
@Injectable({
  providedIn: 'root'
})
export class ProprietaireService {

  private apiUrl = 'http://16.171.138.8:8080/api/proprietaires'; // API endpoint

  constructor(private http: HttpClient) { }

  // Fetch all proprietaires
  getAllProprietaires(): Observable<Proprietaire[]> {
    return this.http.get<Proprietaire[]>(this.apiUrl);
  }

  // Delete a proprietaire
  deleteProprietaire(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
