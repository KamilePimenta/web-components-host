import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ScriptLoaderService } from '../../services/script-loader.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CartComponent {
  constructor(private scriptLoader: ScriptLoaderService) {}

  ngOnInit(): void {
    const externalScriptUrl = 'http://localhost:4003/main.js';
    this.scriptLoader.loadScript(externalScriptUrl, 'web-components-cart');
  }

  ngOnDestroy() {
    this.scriptLoader.removeScript('web-components-cart');
  }
}
