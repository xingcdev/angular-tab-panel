import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabButtonComponent } from './components/tab-button/tab-button.component';
import { TabListComponent } from './components/tab-list/tab-list.component';

@NgModule({
  declarations: [TabButtonComponent, TabListComponent],
  imports: [CommonModule],
  exports: [
    TabListComponent, // <--- Enable using the component in other modules
  ],
})
export class TabPanelModule {}
