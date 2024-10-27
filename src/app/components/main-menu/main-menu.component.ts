import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [RouterModule, NgFor],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss'
})
export class MainMenuComponent {
  public routes = routes;
}
