import { ScriptLoaderService } from './services/script-loader.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '@kamis/auth';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainHeaderComponent } from "./components/main-header/main-header.component";
import { MainFooterComponent } from "./components/main-footer/main-footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MainHeaderComponent,
    MainFooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'web-components-host';
  constructor( private authService: AuthService, private scriptLoaderService: ScriptLoaderService ) {}

  ngOnInit(): void {

    // Call from Lib Auth
    this.authService.login('emilys', 'emilyspass').subscribe({
      next(response) {
        console.log({ response })
        response.accessToken
      },
      error(err: HttpErrorResponse) {
        console.error(err);
      },
    });

    // TODO: FOCAR MFE com ASSETS
  }
}
