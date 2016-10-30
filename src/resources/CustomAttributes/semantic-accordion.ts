import { bindable, inject, customAttribute } from "aurelia-framework";
import * as $ from "jquery";

@customAttribute("semantic_accordion")
@inject(Element)
export class SemanticAccordion {
    element:any;
    
    
    constructor(element) {
        this.element = element;
    }

    attached() {
      
        ($(this.element)as any).accordion()
       
    }
   
     
}