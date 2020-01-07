import { Component } from '@angular/core';
import WarningService from './core/services/warning.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  showContent: boolean = false;

  constructor(private warningService: WarningService,
              private router: Router){

    let self = this;
    // setTimeout(() => {
      
      self.showContent = true;
    //   self.router.navigate(['movies']);

    // }, this.warningService.timeInMs);
  }
}