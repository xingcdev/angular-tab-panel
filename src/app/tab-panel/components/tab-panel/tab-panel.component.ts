import {
  Component,
  AfterViewInit,
  ViewChildren,
  QueryList,
  ElementRef,
} from '@angular/core';

import { TabButtonComponent } from '../tab-button/tab-button.component';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.scss'],
})
export class TabPanelComponent implements AfterViewInit {
  currentPanelId: number = 0;
  currentFocusedTab: number = 0;

  @ViewChildren(TabButtonComponent, { read: ElementRef })
  tabButtonsEl!: QueryList<any>;
  tabButtons: ElementRef[] = [];

  // after all of the component are mounted on the DOM
  ngAfterViewInit() {
    this.tabButtons = this.tabButtonsEl.toArray();
    console.log(this.tabButtons[0].nativeElement);
  }

  activatePanel(id: number) {
    if (id < 0 || id > this.tabButtons.length - 1) return;
    this.currentPanelId = id;

    // Get the current focused tab when the user click on it.
    this.currentFocusedTab = id;
  }

  focusTab(index: number) {
    if (index < 0 || index > this.tabButtons.length - 1) return;
    this.currentFocusedTab = index;
    // nativeElement is the component itself
    this.tabButtons[index].nativeElement.firstChild.focus();
  }

  onKeys(event: any) {
    console.log(event.key);
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      this.focusTab(this.currentFocusedTab - 1);
    } else {
      this.focusTab(this.currentFocusedTab + 1);
    }
  }
}
