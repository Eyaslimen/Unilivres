import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { LtelechargerComponent } from '../ltelecharger/ltelecharger.component';
import { LivreTelecharger } from '../livre-telecharger';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-telecharger',
    standalone: true,
    templateUrl: './telecharger.component.html',
    styleUrl: './telecharger.component.css',
    imports: [LtelechargerComponent,NgFor,FormsModule]
})
export class TelechargerComponent {
LivreListe: LivreTelecharger[]=[
  {"id": 1,
  "titre":"book1",
  "image":"./assets/b1.jpg",
"categorie":"Psychologie"},
  {"id": 2,
  "titre":"book2",
  "image":"./assets/b2.jpg",
  "categorie":"Psychologie"},
  {"id": 3,
  "titre":"book3",
  "image":"./assets/b3.jpg",
  "categorie":"Psychologie"},
  {"id": 1,
  "titre":"book1",
  "image":"./assets/b4.jpg",
  "categorie":"Psychologie"},
  {"id": 1,
  "titre":"book1",
  "image":"./assets/b2.jpg",
  "categorie":"Psychologie"}
];
bookTitle: string = '';
coverPhoto: File | null = null;
pdfFile: File | null = null;
bookCategorie: string='';
showAlert: boolean = false;
  onCoverPhotoSelected(event: any) {
    this.coverPhoto = event.target.files[0];
  }

  onPdfFileSelected(event: any) {
    this.pdfFile = event.target.files[0];
  }

  onSubmit() {
    alert("Livre ajouté avec succès");
    this.resetForm();
  }
  resetForm() {
    this.bookTitle = '';
    this.bookCategorie = '';
    this.coverPhoto = null;
    this.pdfFile = null;
  }
}