
import { bindable, inject, customAttribute } from "aurelia-framework";
import * as $ from "jquery";

@customAttribute("semantic_menu")
@inject(Element)
export class SemanticModal {
    element: any;
    @bindable title: any;
    @bindable placement: any

    constructor(element) {
        this.element = element;
    }

    attached() {
        ($(this.element) as any)
            .on('click', '.item', function () {
                if (!($(this) as any).hasClass('dropdown')) {
                    ($(this) as any)
                        .addClass('active')
                        .siblings('.item')
                        .removeClass('active');
                }
            });
    }



}

