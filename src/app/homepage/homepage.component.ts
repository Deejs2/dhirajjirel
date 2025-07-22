import { Component } from '@angular/core';
import { NavComponent } from "../shared/nav/nav.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { ChatbotComponent } from "../component/chatbot/chatbot.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavComponent, FooterComponent, RouterOutlet, ChatbotComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
