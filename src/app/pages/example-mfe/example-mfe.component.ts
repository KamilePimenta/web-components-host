import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ScriptLoaderService } from '../../services/script-loader.service';

@Component({
  selector: 'app-example-mfe',
  standalone: true,
  imports: [],
  templateUrl: './example-mfe.component.html',
  styleUrl: './example-mfe.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExampleMfeComponent {
  constructor(private scriptLoader: ScriptLoaderService) {}

  ngOnInit(): void {
    const externalScriptUrl = 'https://webcomponent2908.blob.core.windows.net/mfe1/main.js';
    this.scriptLoader.loadScript(externalScriptUrl, 'web-components-example');
  }

  ngOnDestroy() {
    this.scriptLoader.removeScript('web-components-example');
  }
}
