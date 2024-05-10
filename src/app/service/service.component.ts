import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AchatsComponent } from '../achats/achats.component';
@Component({
  selector: 'app-service',
  standalone: true,
  imports: [RouterLink,RouterOutlet,AchatsComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

}
