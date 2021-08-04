import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.scss'],
})
export class TabPanelComponent implements OnInit {
  currentPanelId: number;
  // ViewChildren
  constructor() {
    this.currentPanelId = 0;
  }

  ngOnInit(): void {}

  activatePanel(id: number) {
    this.currentPanelId = id;
  }
}
