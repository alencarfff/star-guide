import { Component, OnInit } from '@angular/core';
import WarningService from '../core/services/warning.service';

@Component({
  selector: 'sw-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.scss']
})
export class WarningComponent implements OnInit {
  isVisible: boolean = true;

  constructor(private warningService: WarningService){}

  ngOnInit() {
    let self = this;

    setTimeout(() => {
      self.hide()
    }, this.warningService.timeInMs);
  }

  hide(){
    this.isVisible = false;
  }
}
