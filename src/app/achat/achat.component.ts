import { Component,Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { LivreAchat } from '../livre-achat';
import { AchatsComponent } from '../achats/achats.component';
@Component({
  selector: 'app-achat',
  standalone: true,
  imports: [NgFor],
  templateUrl: './achat.component.html',
  styleUrl: './achat.component.css'
})
export class AchatComponent {
[x: string]: any;
@Input() livreAchat!:LivreAchat;
}
