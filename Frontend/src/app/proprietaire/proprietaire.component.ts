import { Component, OnInit } from '@angular/core';
import { ProprietaireService } from './proprietaire.service';
import { Proprietaire } from './proprietaire.model'; // Model for proprietaire

@Component({
  selector: 'app-proprietaire',
  templateUrl: './proprietaire.component.html',
  styleUrls: ['./proprietaire.component.css']
})
export class ProprietaireComponent implements OnInit {

  proprietaires: Proprietaire[] = []; // Store proprietaire data

  constructor(private proprietaireService: ProprietaireService) { }

  ngOnInit(): void {
    // Fetch the list of proprietaires on initialization
    this.proprietaireService.getAllProprietaires().subscribe(data => {
      this.proprietaires = data;
    });
  }

  // Optionally, you can add methods to handle edit and delete functionality here
  deleteProprietaire(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce propriétaire ?')) {
      this.proprietaireService.deleteProprietaire(id).subscribe(() => {
        this.proprietaires = this.proprietaires.filter(p => p.id !== id);
      });
    }
  }

  editProprietaire(id: number): void {
    // Your edit logic here, for example:
    alert(`Edit Proprietaire with ID: ${id}`);
  }
}
