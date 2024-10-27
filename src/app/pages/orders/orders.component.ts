import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ScriptLoaderService } from '../../services/script-loader.service';

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
    const externalScriptUrl = 'http://localhost:4002/main.js';
    this.scriptLoader.loadScript(externalScriptUrl, 'web-components-order');
  }

  ngOnDestroy() {
    this.scriptLoader.removeScript('web-components-order');
  }
}
