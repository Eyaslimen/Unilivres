import { Component,Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { LivreTelecharger } from '../livre-telecharger';
@Component({
  selector: 'app-ltelecharger',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ltelecharger.component.html',
  styleUrl: './ltelecharger.component.css'
})
export class LtelechargerComponent {
[x: string]: any;
@Input() livreTelecharger!:LivreTelecharger;
downloadPdf(fileName: string) {
  const pdfUrl = `./assets/${fileName}.pdf`;
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = fileName;
  // Ajouter l'élément au DOM et déclencher le clic pour démarrer le téléchargement
  document.body.appendChild(link);
  link.click();
  // Retirer l'élément du DOM
  document.body.removeChild(link);
}
}
