import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ScriptLoaderService } from '../../services/script-loader.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {
  constructor(private scriptLoader: ScriptLoaderService) {}

  ngOnInit(): void {
    const externalScriptUrl = 'http://localhost:4001/main.js';
    this.scriptLoader.loadScript(externalScriptUrl, 'web-components-home');
  }

  ngOnDestroy() {
    this.scriptLoader.removeScript('web-components-home');
  }
}
