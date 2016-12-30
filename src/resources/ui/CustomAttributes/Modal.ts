import { bindable, inject, customAttribute } from "aurelia-framework";
import * as $ from "jquery";

@customAttribute("ui-modal")
@inject(Element)
export class UIModal {
    element:any;
   
    
    constructor(element) {
        this.element = element;
    }

    attached() {
        console.log('this',this.element);
         ($(this.element)as any).click(()=>{
        ($('.ui.modal') as any).modal('show');    
     });
    }
      
}
