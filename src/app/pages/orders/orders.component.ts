import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ScriptLoaderService } from '../../services/script-loader.service';
import { MFE_KMS_ORDER_BASE_URL } from '../../../environments/local.env';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OrdersComponent {
  constructor(private scriptLoader: ScriptLoaderService) {}

  ngOnInit(): void {
    const runtime = `${MFE_KMS_ORDER_BASE_URL}/runtime.js`;
    const polyfills = `${MFE_KMS_ORDER_BASE_URL}/polyfills.js`;
    const main = `${MFE_KMS_ORDER_BASE_URL}/main.js`;

    this.scriptLoader.loadScript(runtime, 'web-components-orders-r');
    this.scriptLoader.loadScript(polyfills, 'web-components-orders-p');
    this.scriptLoader.loadScript(main, 'web-components-orders-m');
  }

  ngOnDestroy() {
    this.scriptLoader.removeScript('web-components-orders-r');
    this.scriptLoader.removeScript('web-components-orders-p');
    this.scriptLoader.removeScript('web-components-orders-m');
  }
}
