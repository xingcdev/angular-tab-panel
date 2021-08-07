import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TabButtonComponent } from './components/tab-button/tab-button.component';
import { TabListComponent } from './components/tab-list/tab-list.component';
import { ContentPanelComponent } from './components/content-panel/content-panel.component';
import { TabPanelComponent } from './components/tab-panel/tab-panel.component';

@NgModule({
  declarations: [
    TabButtonComponent,
    TabListComponent,
    ContentPanelComponent,
    TabPanelComponent,
  ],
  imports: [CommonModule, FlexLayoutModule],
  exports: [
    TabPanelComponent, // <--- Enable using the component in other modules
  ],
})
export class TabPanelModule {}
