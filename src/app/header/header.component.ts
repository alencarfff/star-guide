import { Component } from '@angular/core';
import { UtilService } from '../core/util.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router){}

  goTo(url: string){
    this.router.navigate([url]);
  }
}
