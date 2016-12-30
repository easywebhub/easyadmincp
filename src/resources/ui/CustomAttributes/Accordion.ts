import {inject} from 'aurelia-framework';
@inject(Element)
export class UiAccordionCustomAttribute {
    constructor(private element : Element ){
    }
    attached() {
        ($('.ui.accordion') as any).accordion();
    }
}

