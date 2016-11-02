import { customAttribute, bindable, inject } from 'aurelia-framework';
import * as moment from 'moment';
import 'semantic-ui-calendar';
declare let $: JQueryStatic;
@inject(Element)
@customAttribute('semantic_calendar')
export class SemanCalendar {
    element: Element;
    @bindable VCalendar;
    constructor(element) {
        this.element=element
    }
    attached() {
        console.log('elemt',this.element);
       ( $(this.element) as any ).calendar(
            {
                type: 'datetime',
                ampm: false,
               
                formatter: {
                    datetime: function (date, settings) {
                        //return a formatted string representing the date & time of 'date' 
                        if (!date) return '';
                        var day = date.getDate();
                        var month = date.getMonth() + 1;
                        var year = date.getFullYear();
                        var hh = date.getHours()
                        var mm = date.getMinutes()
                        if (hh <= 9 && hh >= 0) {
                            hh = '0' + hh
                        }
                        
                        hh = hh;
                        if (mm <= 9 && mm >= 0) {
                            mm = '0' + mm
                        }
                        mm = mm;
                       
                        var ss = date.getMilliseconds()
                        return day + '/' + month + '/' + year + ' ' + hh + ':' + mm;
                    }
                },
                onChange: (date, text) => {
                    console.log('data', date);
                    //console.log('vardate', this.VCalendar);
                }
            }
        );


    

    
    }
    
}
