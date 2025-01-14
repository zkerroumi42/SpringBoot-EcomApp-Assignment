import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AppartementService } from './appartement.service';

interface Chambre {
  id: number;
  description: string;
  maxMembers: number;
  prix: number;
  status: string;
  type: string;
}

interface Appartement {
  id: number;
  ville: string;
  secteur: string;
  prix: number;
  maxMembre: number;
  description: string;
  status: string;
  bonus: string;
  typelocataire: string;
  typeoffre: string;
  chambres: Chambre[];
  proprietaireId: number;
}

@Component({
  selector: 'app-list-appartement',
  templateUrl: './list-appartement.component.html',
  styleUrls: ['./list-appartement.component.css']
})
export class ListAppartementComponent implements OnInit {
  displayedColumns: string[] = ['ville', 'secteur', 'prix', 'maxMembre', 'status', 'action'];
  dataSource: MatTableDataSource<Appartement> = new MatTableDataSource<Appartement>([]);
  appartements: Appartement[] = [];
  selectedAppartement: Appartement | null = null;

  // Variables pour les formulaires d'ajout/édition
  appartementForm: Appartement = {
    id: 0,
    ville: '',
    secteur: '',
    prix: 0,
    maxMembre: 0,
    description: '',
    status: '',
    bonus: '',
    typelocataire: '',
    typeoffre: '',
    chambres: [],
    proprietaireId: 0,
  };

  chambreForm: Chambre = {
    id: 0,
    description: '',
    maxMembers: 0,
    prix: 0,
    status: '',
    type: ''
  };

  appartementFormVisible: boolean = false;
  chambreFormVisible: boolean = false;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private appartementService: AppartementService) {}

  ngOnInit(): void {
    this.appartementService.getAppartements().subscribe(
      data => {
        this.appartements = data;
        this.dataSource = new MatTableDataSource<Appartement>(this.appartements);
        this.dataSource.sort = this.sort;
      },
      error => {
        console.error('Erreur lors de la récupération des appartements :', error);
      }
    );
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  showChambres(appartement: Appartement): void {
    this.selectedAppartement = appartement;
  }

  closeChambres(): void {
    this.selectedAppartement = null;
  }

  // Fonction pour ouvrir un formulaire d'ajout/modification d'appartement
  openAppartementForm(appartement: Appartement | null = null): void {
    if (appartement) {
      this.appartementForm = { ...appartement }; // Pré-remplir le formulaire avec les données de l'appartement
    } else {
      this.appartementForm = {
        id: 0,
        ville: '',
        secteur: '',
        prix: 0,
        maxMembre: 0,
        description: '',
        status: '',
        bonus: '',
        typelocataire: '',
        typeoffre: '',
        chambres: [],
        proprietaireId: 0,
      };
    }
    this.appartementFormVisible = !this.appartementFormVisible; // Afficher le formulaire d'appartement
  }

  closeAppartementForm(): void {
    this.appartementFormVisible = false; // Cacher le formulaire d'appartement
  }

  // Ajouter ou mettre à jour un appartement
  saveAppartement(): void {
    if (this.appartementForm.id === 0) {
      this.appartementService.addAppartement(this.appartementForm).subscribe(
        response => {
          this.appartements.push(response);
          this.dataSource.data = [...this.appartements];
          this.closeAppartementForm();
        },
        error => {
          console.error('Erreur lors de l\'ajout de l\'appartement :', error);
        }
      );
    } else {
      this.appartementService.updateAppartement(this.appartementForm).subscribe(
        response => {
          const index = this.appartements.findIndex(app => app.id === response.id);
          this.appartements[index] = response;
          this.dataSource.data = [...this.appartements];
          this.closeAppartementForm();
        },
        error => {
          console.error('Erreur lors de la mise à jour de l\'appartement :', error);
        }
      );
    }
  }

  // Ajouter une chambre
  addChambre(): void {
    if (this.selectedAppartement) {
      this.appartementService.addChambre(this.selectedAppartement.id, this.chambreForm).subscribe(
        response => {
          this.selectedAppartement!.chambres.push(response);
          this.chambreFormVisible = false; // Fermer le formulaire après l'ajout
        },
        error => {
          console.error('Erreur lors de l\'ajout de la chambre :', error);
        }
      );
    }
  }

  openChambreForm(): void {
    this.chambreFormVisible = !this.chambreFormVisible; // Afficher le formulaire de chambre
  }
}
