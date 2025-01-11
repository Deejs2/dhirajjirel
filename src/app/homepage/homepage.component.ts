import { Component } from '@angular/core';
import { NavComponent } from "../shared/nav/nav.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavComponent, FooterComponent, RouterOutlet],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
