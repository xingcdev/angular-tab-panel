## Components

Tab - a single tab button
Tab-list - list of tab
Panel - content panel of eath tab

## User stories

- [ ] Make the responsive navigation sidebar
- [x] When the user clicks on the tabs, display the page related to the clicked tab.
- [x] When you press arrow left or right you switch the focus from the active tab heading to the next or previous one
- [x] When you press Enter or Space, actual content will transition to the content related to selected Tab Heading
- [x] When you have focus on Button 1, then you press tabulation, focus go to the current active tab heading, then if you press tabulation, focus will go to button 3
- [ ] Add switch page animation

## What i learned

### Module organization practice

### Life cycle hooks

`ngAfterViewInit()`

When the application loads, the child element may not be loaded completely, and if we try to access the component, it returns undefined. To resolve this, we use the lifecycle hook, which allows us to access any element after the view is initialized.

### DOM manipulation

`@ViewChild` and `@ViewChildren` are the types of decorators used to **query the DOM element of a child component**.

See: [Querying the DOM with @ViewChild and @ViewChildren](https://www.pluralsight.com/guides/querying-the-dom-with-@viewchild-and-@viewchildren)

### Tabindex

`tabindex` attribute indicates that its element can be focused.

Make a button that is NOT accessible when pressing the tabulation :

```
<button
  role="tab"
  [attr.aria-controls]="'panel-' + panelId"
  [attr.aria-selected]="isSelected"
  [attr.tabindex]="-1"
>
  <ng-content></ng-content>
</button>
```

## Resources

[Accessible Tabs in Angular - This Dot Labs](https://www.thisdot.co/blog/accessible-tabs-in-angular)

[ARIA: tab role - MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role)

[Feature modules - Angular](https://angular.io/guide/feature-modules)

[Le cycle de vie d’un Component - Learn Angular](https://www.learn-angular.fr/le-cycle-de-vie-dun-component/)
