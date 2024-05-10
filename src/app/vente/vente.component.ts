import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-vente',
    standalone: true,
    templateUrl: './vente.component.html',
    styleUrl: './vente.component.css',
    imports: [CommonModule,FormsModule]
})
export class VenteComponent {
  name: string='';
  phone: string='';
  adress: string='';
  bookTitle: string = '';
  price: string = '';
  coverPhoto: File | null = null;
  bookCategorie: string='';
    onCoverPhotoSelected(event: any) {
      this.coverPhoto = event.target.files[0];
    }
    onSubmit() {
      alert("Livre ajouté avec succès");
      this.resetForm();
    }
    resetForm() {
      this.bookTitle = '';
      this.name = '';
      this.price = '';
      this.phone = '';
      this.adress = '';
      this.coverPhoto = null;
      this.bookCategorie='';
    }
  }