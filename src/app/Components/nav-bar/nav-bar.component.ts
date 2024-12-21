import { Component } from '@angular/core';
import '@fortawesome/angular-fontawesome'; // Import the specific icon you need

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  imgSrc:string='../../assets/images/logo.png'
}
