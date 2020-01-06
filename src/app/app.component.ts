import { Component } from '@angular/core';
import WarningService from './core/services/warning.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  showContent: boolean = false;

  constructor(private warningService: WarningService){
    let self = this;
    
    setTimeout(() => self.showContent = true, this.warningService.timeInMs);
  }
}