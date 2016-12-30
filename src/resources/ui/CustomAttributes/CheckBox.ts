import { bindable, inject, customAttribute } from "aurelia-framework";
import * as $ from "jquery";

@customAttribute("ui-checkbox")
@inject(Element)
export class UICheckbox {
    element:any;
     constructor(element) {
        this.element = element;
    }

    attached() {
        
        ($(this.element)as any).checkbox({
            })
            ;
    }
   
     
}