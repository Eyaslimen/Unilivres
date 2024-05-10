import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { LivreAchat } from '../livre-achat';
import { AchatComponent } from '../achat/achat.component';
@Component({
    selector: 'app-achats',
    standalone: true,
    templateUrl: './achats.component.html',
    styleUrl: './achats.component.css',
    imports: [AchatComponent,NgFor]
})
export class AchatsComponent {
LivreListe: LivreAchat[]=[
  {"id": 1,
  "titre":"book1",
  "image":"./assets/b1.jpg",
  "prix":"20 dt",
"categorie":"Psychologie"},
  {"id": 2,
  "titre":"book2",
  "image":"./assets/b2.jpg",
  "prix":"20 dt",
  "categorie":"Psychologie"},
  {"id": 3,
  "titre":"book3",
  "image":"./assets/b3.jpg",
  "prix":"20 dt",
  "categorie":"Psychologie"},
  {"id": 1,
  "titre":"book1",
  "image":"./assets/b4.jpg",
  "prix":"20 dt",
  "categorie":"Psychologie"},
  {"id": 1,
  "titre":"book1",
  "image":"./assets/b2.jpg",
  "prix":"20 dt",
  "categorie":"Psychologie"}
];
}
