import {inject} from 'aurelia-framework';
import * as $ from 'jquery'
@inject(Element)
export class UiAccordionCustomAttribute {
    constructor(private element : Element ){
    }
    attached() {
        ($('.ui.accordion') as any).accordion();
    }
}

