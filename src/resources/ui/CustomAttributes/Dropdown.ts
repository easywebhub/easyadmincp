import {
  inject,
  bindable,
  bindingMode,
  customAttribute
} from 'aurelia-framework';

import * as $ from "jquery";

@customAttribute("ui-dropdown")
@inject(Element)
export class UIDropdown {
  element: any;
  @bindable({
    defaultBindingMode: bindingMode.twoWay
  }) vdrop
  constructor(element) {
    this.element = element;
  }
  attached() {
    //($('.ui.dropdown') as any).dropdown('refresh');

          ($('.ui.dropdown') as any).dropdown(
          'set selected', this.vdrop
        );
      
    
    ($('.ui.dropdown') as any)
    .dropdown({
      onChange: function (value, text, $selectedItem) {
        this.vdrop = value
        console.log('chang drop', this.vdrop);
      }
    })

  }



}
