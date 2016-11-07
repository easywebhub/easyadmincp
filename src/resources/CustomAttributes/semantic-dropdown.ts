import { bindable, inject, customAttribute } from "aurelia-framework";
import * as $ from "jquery";

@customAttribute("semantic_dropdown")
@inject(Element)
export class SemanticDropdown {
    element:any;
     @bindable valueDrop;
    
    constructor(element) {
        this.element = element;
        this.valueDrop = "";
    }

    attached() {
      
       ($(this.element) as any).dropdown(
            'set value(value)',this.valueDrop
            )
            ;
    }
   
     
}