import {
  inject
} from 'aurelia-framework';
@inject(Element)
export class UiCkeditorCustomAttribute {
  constructor(private element : any) {
    console.log("Element", this.element);
  }
  attached() {
    console.log('value : ', this.element.value);
    var $s = require('scriptjs');
    $s('./vendor/ckeditor/ckeditor.js', () => {
      let editor = CKEDITOR.replace(this.element.id);
    editor.setData(this.element.value);
    editor.on('change', () => {
        this.element.value = editor.getData();
        this.element.dispatchEvent(new Event('change'));

      });
    });
  }
}
