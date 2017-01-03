
import { bindable, inject, customAttribute } from "aurelia-framework";
import * as $ from "jquery";

@customAttribute("ui-menu")
@inject(Element)
export class UIMenu {
    element: any;
    
    constructor(element) {
        this.element = element;
    }

    attached() {
        ($(this.element) as any)
            .on('click','.item', function () {
                if (!($(this) as any).hasClass('dropdown')) {
                    ($(this) as any)
                        .addClass('active')
                        .siblings('.item')
                        .removeClass('active');
                }
            });
    }



}

