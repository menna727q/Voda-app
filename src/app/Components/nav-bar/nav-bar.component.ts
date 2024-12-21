import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  
  templateUrl: './nav-bar.component.html',
  styleUrls:['./nav-bar.component.css']
})
export class NavBarComponent {
  imgSrc: string = 'assets/clear.png';
}
