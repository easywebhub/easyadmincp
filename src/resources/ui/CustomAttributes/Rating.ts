import { bindable, inject, customAttribute } from "aurelia-framework";
import * as $ from "jquery";

@customAttribute("ui-rating")
@inject(Element)
export class UIRating {
    element:any;
    
    
    constructor(element) {
        this.element = element;
    }

    attached() {
        
        ($(this.element)as any).rating({
            })
            ;
    }
   
     
}