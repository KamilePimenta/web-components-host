import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ScriptLoaderService } from '../../services/script-loader.service';
import { MFE_KMS_HOME_BASE_URL } from '../../../environments/local.env';

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
    const runtime = `${MFE_KMS_HOME_BASE_URL}/runtime.js`;
    const polyfills = `${MFE_KMS_HOME_BASE_URL}/polyfills.js`;
    const main = `${MFE_KMS_HOME_BASE_URL}/main.js`;

    this.scriptLoader.loadScript(runtime, 'web-components-home-r');
    this.scriptLoader.loadScript(polyfills, 'web-components-home-p');
    this.scriptLoader.loadScript(main, 'web-components-home-m');
  }

  ngOnDestroy() {
    this.scriptLoader.removeScript('web-components-home-r');
    this.scriptLoader.removeScript('web-components-home-p');
    this.scriptLoader.removeScript('web-components-home-m');
  }
}
