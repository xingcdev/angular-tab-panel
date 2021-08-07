## Overview

A tab panel built using [Angular 12](https://angular.io/).

## User stories

- [x] Make the responsive navigation sidebar
- [x] When the user clicks on the tabs, display the page related to the clicked tab.
- [x] When you press arrow left or right you switch the focus from the active tab heading to the next or previous one
- [x] When you press Enter or Space, actual content will transition to the content related to selected Tab Heading
- [x] When you have focus on Button 1, then you press tabulation, focus go to the current active tab heading, then if you press tabulation, focus will go to button 3

## What i learned

### Module organization practice

It's a good practice to create a module for each feature. A module contains all components required of a feature.

Create the module `CustomerDashboard`:

```shell
ng generate module CustomerDashboard
```

Create a main component of this module :

```shell
ng generate component customer-dashboard/CustomerDashboard
```

Export the `CustomerDashboardComponent` component to let others modules to get to it :

```javascript
// customer-dashboard.module.ts

exports: [CustomerDashboardComponent];
```

To incorporate the feature module into your app, you have to let the root module, `app.module.ts`, know about it:

```javascript
// app.module.ts

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CustomerDashboardModule // add the feature module here
  ],
  ...
```

You can now use `CustomerDashboardComponent` in your app `app.component.html`:

```html
<!-- app.component.html -->

<app-customer-dashboard></app-customer-dashboard>
```

See: [Feature modules - Angular](https://angular.io/guide/feature-modules)

### Life cycle hooks

`ngAfterViewInit()` - When the application loads, the child element may not be loaded completely, and if we try to access the component, it returns undefined. To resolve this, we use the **lifecycle hook**, which allows us to access any element after the view is initialized.

```javascript
export class TabPanelComponent implements AfterViewInit {

  // After all of the component are mounted on the DOM
  ngAfterViewInit() {
    // Some code
  }
```

see: [Le cycle de vie d’un Component - Learn Angular](https://www.learn-angular.fr/le-cycle-de-vie-dun-component/)

### DOM manipulation

`@ViewChild` and `@ViewChildren` are the types of decorators used to **query the DOM element of a child component**.

Query all tab buttons of TabButtonComponent from DOM:

```javascript
  @ViewChildren(TabButtonComponent, { read: ElementRef }) tabButtonsEl!: QueryList<any>;
  tabButtons: ElementRef[] = [];

  // After all of the component are mounted on the DOM
  ngAfterViewInit() {
    this.tabButtons = this.tabButtonsEl.toArray();
    // Display the first tab button
    console.log(this.tabButtons[0].nativeElement);
  }
```

See: [Querying the DOM with @ViewChild and @ViewChildren](https://www.pluralsight.com/guides/querying-the-dom-with-@viewchild-and-@viewchildren)

### Tabindex

`tabindex` HTML attribute indicates that its element can be focused.

Make a button that is NOT accessible when pressing the tabulation :

```html
<button
  role="tab"
  [attr.aria-controls]="'panel-' + panelId"
  [attr.aria-selected]="isSelected"
  [attr.tabindex]="-1"
>
  <ng-content></ng-content>
</button>
```

See: [ARIA: tab role - MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role)

### Responsive in Angular

[Angular Flex-Layout](https://github.com/angular/flex-layout) library allows us to use flexbox to create a responsive component.

```html
// gt-sm : screen and (min-width: 960px)
<app-tab-list fxLayout="row" fxLayout.gt-sm="column"></app-tab-list>
```

## Resources

[Accessible Tabs in Angular - This Dot Labs](https://www.thisdot.co/blog/accessible-tabs-in-angular) helps me to build this tab panel.
