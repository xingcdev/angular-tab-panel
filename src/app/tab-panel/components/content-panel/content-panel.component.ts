import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-panel',
  templateUrl: './content-panel.component.html',
  styleUrls: ['./content-panel.component.scss'],
})
export class ContentPanelComponent implements OnInit {
  @Input() panelId: number;

  constructor() {
    this.panelId = 0;
  }

  ngOnInit(): void {}
}
