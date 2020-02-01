import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements'; 
import { OperationsComponent } from './components/operations.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'samplewebcomponent';

  constructor(injector: Injector) {
    
    const HelloWorldComponentElement = createCustomElement(OperationsComponent, {injector});
    // // Register the custom element with the browser.
    customElements.define('operations-angularcomponent', HelloWorldComponentElement);
  }
}
