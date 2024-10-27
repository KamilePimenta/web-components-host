import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptLoaderService {

  private scriptsList: string[] = [];

  loadScript(url: string, name: string): void {
    if (this.scriptsList.includes(name)) return;

    const tentative = new Promise<void>((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.setAttribute('kmswebcomponent', name);
      script.onload = () => resolve();
      script.onerror = () => reject();
      document.body.appendChild(script);

      this.scriptsList.push(name);
    });

    tentative.then(() => {
      // Script loaded successfully
      console.log(`${name} - MFE SUCCESS`)
    })
    .catch(() => {
      // Error loading script
      console.error(`${name} - MFE ERROR`)
    });
  }

  removeScript(name: string) {
    const wcScript = document.querySelector(`script[kmswebcomponent="${name}"]`);
    if (wcScript) {
      wcScript.remove();
      this.scriptsList.unshift(name);
    }
  }
}
