import {computedFrom} from 'aurelia-framework';
export class Welcome {
  contents : string = 'this is from view model';
  
  attached() {

  }
  save(){
    alert(this.contents);
  }
}

