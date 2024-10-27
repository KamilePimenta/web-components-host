import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainMenuComponent } from '../main-menu/main-menu.component';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [RouterModule, MainMenuComponent],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss'
})
export class MainHeaderComponent {

}
