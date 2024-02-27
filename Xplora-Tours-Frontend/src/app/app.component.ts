import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AddTripFormComponent } from './Components/add-trip-form/add-trip-form.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LandingPageComponent, FooterComponent, AddTripFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Xplora-Tours-Frontend';
}
