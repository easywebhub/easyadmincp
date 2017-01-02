import {
  bindable,
  inject,
  customAttribute
} from "aurelia-framework";
import * as $ from "jquery";

@customAttribute("ui-tab")
@inject(Element)
export class UITab {
  element: any;


  constructor(element) {
    this.element = element;
  }
  attached() {
    ($('.menu .item') as any).tab();

  }

  //   detached() {
  //     ($(this.element)as any).popup({observeChanges:true});
  // }
}
