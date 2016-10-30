
import { bindable, inject, customElement } from 'aurelia-framework';
import { BindingEngine } from 'aurelia-binding';
declare let $: JQueryStatic;
@customElement("number-box")
@inject(BindingEngine, Element)
export class NumberBox {

    @bindable value
    @bindable min;
    @bindable max;
    @bindable step = 0;
    @bindable format;
    @bindable decimals = 2


    bindingEngine: BindingEngine

    _value: number;
    private element;
    constructor(bindingEngine, element) {
        this.bindingEngine = bindingEngine
        this.element = element;

    }
    currentValue$(newValue) {
        return '$' + parseFloat(newValue).toFixed(this.decimals);
    }
    // inputResult(newValue) {
    //     return this.check$(newValue) == true ? newValue.substring(1, newValue.length - (this.decimals + 1)) : newValue
    // } 
    resultChange$(newValue) {
        if (this.format == "$") {
            ($('input[name="quantity"]') as any).focus(() => {
                
                this.value = this.inputResult(newValue)
            }).blur(() => {
                this.value = this.currentValue$(this.checkMax(newValue, this.max));
            })
        }    
    }
    resultChangePerce(newValue) {
        if (this.format == "p0") {
            ($('input[name="quantity"]') as any).focus(() => {
              if(newValue)
                this.value = this.inputResult(newValue)
            }).blur(() => {
                this.value = this.currentValue$(this.checkMax(newValue, this.max));
            })
        }     
       
    }
   
    
    valueChanged(newValue, oldValue) {


    }
    inputResult(newValue) {
        return this.check$(newValue) == true ? newValue.substring(1, newValue.length - (this.decimals + 1)) : newValue
    }
    attached() {
        //return this.inputKey();
    }
    check$(newValue) {
        return newValue[0] == "$" ? true : false
    }
    checkPerce(newValue) {
        return newValue[length] == "%" ? true : false
    }
    checkMax(newValue, max) {
        return this.inputResult(newValue) > max ? max : newValue
    }

   
}