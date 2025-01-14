import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppartementService {

  private apiUrl = 'http://16.171.138.8:8080/api/appartements'; // L'URL de votre API

  constructor(private http: HttpClient) {}

  // Récupérer les appartements depuis l'API
  getAppartements(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Ajouter un nouvel appartement
  addAppartement(appartement: any): Observable<any> {
    const proprietaireId = appartement.proprietaireId;  // Récupérer l'ID du propriétaire depuis le modèle
    const url = `${this.apiUrl}?proprietaireId=${proprietaireId}`; // Ajouter proprietaireId dans l'URL
    return this.http.post<any>(url, appartement); // Envoyer l'appartement dans le body
  }

  // Mettre à jour un appartement existant
  updateAppartement(appartement: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${appartement.id}`, appartement);
  }

  // Ajouter une chambre à un appartement
  addChambre(appartementId: number, chambre: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${appartementId}/chambres`, chambre);
  }

  // Mettre à jour une chambre d'un appartement
  updateChambre(appartementId: number, chambre: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${appartementId}/chambres/${chambre.id}`, chambre);
  }
}
