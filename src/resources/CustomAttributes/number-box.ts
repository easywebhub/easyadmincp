import { bindable, inject, customAttribute } from "aurelia-framework";
import {BindingEngine} from 'aurelia-binding';
import * as $ from "jquery";

@customAttribute("number-box")
@inject(Element,BindingEngine)
export class NumberBox {
    
    @bindable value;
    @bindable min=0;
    @bindable max=100;
    @bindable format;
    @bindable decimals;
    element: any;
    bindingEngine:BindingEngine;
    
    
    constructor(element,bindingEngine) {
        this.element = element;
        this.bindingEngine = bindingEngine;
        
    }
    bind() {
       this.min = parseFloat(this.min as any);
       this.max = parseFloat(this.max as any);
    
  }
    attached() {
     
    }
   
     
}