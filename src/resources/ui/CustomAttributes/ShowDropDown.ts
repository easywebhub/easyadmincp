import {
  inject,
  bindable,
  bindingMode,
  customAttribute
} from 'aurelia-framework';

import * as $ from "jquery";

@customAttribute("ui-showdropdown")
@inject(Element)
export class ShowDropDown {
  element: any;
  
  constructor(element) {
    this.element = element;
  }
  attached() {
   ($(this.element) as any)
  .dropdown({
   
  })
 }

}

