import {inject, bindable, bindingMode , customElement  } from 'aurelia-framework';
declare let $: JQueryStatic;
@customElement('semantic_dropdown')
@inject(Element)    
export class SemanticDropDown{
    @bindable({ defaultBindingMode: bindingMode.twoWay }) vdrop
    element:Element
    constructor(element) {
       
        this.element = element;
        this.vdrop ='';
         console.log('default', this.vdrop);
    }
   
    attached() {
        ($(this.element) as any).dropdown(
            'set value(value)',this.vdrop
            )
            ;
      ($(this.element) as any)
  .dropdown({
    action: 'hide',
    onChange: function(value, text, $selectedItem) {
        console.log('value change',value);
    }
  })
;
          
    }
   
}


