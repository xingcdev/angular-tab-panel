import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-panel',
  templateUrl: './content-panel.component.html',
  styleUrls: ['./content-panel.component.scss'],
})
export class ContentPanelComponent implements OnInit {
  @Input() id: string;

  constructor() {
    this.id = '';
  }

  ngOnInit(): void {}
}
