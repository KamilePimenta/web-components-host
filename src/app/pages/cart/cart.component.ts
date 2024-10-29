import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ScriptLoaderService } from '../../services/script-loader.service';
import { MFE_KMS_CART_BASE_URL } from '../../../environments/local.env';

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
    const runtime = `${MFE_KMS_CART_BASE_URL}/runtime.js`;
    const polyfills = `${MFE_KMS_CART_BASE_URL}/polyfills.js`;
    const main = `${MFE_KMS_CART_BASE_URL}/main.js`;

    this.scriptLoader.loadScript(runtime, 'web-components-cart-r');
    this.scriptLoader.loadScript(polyfills, 'web-components-cart-p');
    this.scriptLoader.loadScript(main, 'web-components-cart-m');
  }

  ngOnDestroy() {
    this.scriptLoader.removeScript('web-components-cart-r');
    this.scriptLoader.removeScript('web-components-cart-p');
    this.scriptLoader.removeScript('web-components-cart-m');
  }
}
