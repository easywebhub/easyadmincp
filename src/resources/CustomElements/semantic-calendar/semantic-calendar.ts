import {inject, bindable, bindingMode , customElement  } from 'aurelia-framework';
import 'semantic-ui-calendar';
declare let $: JQueryStatic;
import * as moment from 'moment';
@customElement('semantic_calendar')
@inject(Element)    
export class SemanticCalendar{
    @bindable({ defaultBindingMode: bindingMode.twoWay }) vl
    element:Element
    constructor(element) {
       
        this.element = element;
        this.vl =new Date ();
         console.log('default', this.vl);
    }
    focusDate(date) {
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
    attached() {
        
        ($(this.element) as any).calendar('set date', this.vl=this.focusDate(this.vl));
      ($(this.element) as any ).calendar(
            {
                type: 'datetime',
                ampm: false,
               
               formatter: {
                   datetime: function (date, settings) {
                       console.log('format',date);
                        
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
                  
                    this.vl = date ;
                }
            }
        );
          
    }
   
}


