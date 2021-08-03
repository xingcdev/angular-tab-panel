import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabButtonComponent } from './components/tab-button/tab-button.component';



@NgModule({
  declarations: [
    TabButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TabButtonComponent // <--- Enable using the component in other modules
  ]
})
export class TabPanelModule { }
