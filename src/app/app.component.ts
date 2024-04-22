import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { FooterComponent } from './Component/footer/footer.component';
import { SliderComponent } from './Component/slider/slider.component';
import { ProductsComponent } from './Component/products/products.component';
import { FormComponent } from './Component/form/form.component';
import { TrackDetailsComponent } from './Component/track-details/track-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,FooterComponent,SliderComponent,ProductsComponent,FormComponent,TrackDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Day1';
}
