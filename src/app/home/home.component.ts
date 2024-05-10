import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { ServiceComponent } from "../service/service.component";
import { AchatsComponent } from "../achats/achats.component";
import { ContacterComponent } from "../contacter/contacter.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [AboutComponent, ServiceComponent, AchatsComponent, ContacterComponent, FooterComponent]
})
export class HomeComponent {

}
