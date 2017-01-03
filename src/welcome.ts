import {DialogService} from 'aurelia-dialog';
import {Prompt} from './prompt';
import * as Lockr from 'lockr';
import * as $ from 'jquery'
export class Welcome {
  static inject = [DialogService];
  constructor(private dialogService) {
    this.dialogService = dialogService;
  }
  // submit(){
    
  //   this.dialogService.open({ viewModel: Prompt, view:'prompt.html' ,model: 'Good or Bad?'}).then(response => {
  //     if (!response.wasCancelled) {
  //       console.log('good');
  //     } else {
  //       console.log('bad');
  //     }
  //     console.log(response.output);
  //   });
  // }
  attached(){
      ($('.modal') as any).modal('hide');
    
  }
  openModal(){
      ($('.modal') as any).modal('show');
      var rules = {
      Name: {
        identifier: 'Name',
        rules: [{
          type: 'empty',
          prompt: 'Xin vui lòng nhập tên vào'
        }]
      },
      PasswoDisplayName: {
        identifier: 'DisplayName',
        rules: [{
          type: 'empty',
          prompt: 'Xin vui lòng nhập DisplayName'
        }]
      },
      Link: {
        identifier: 'Url',
        rules: [{
          type: 'empty',
          prompt: 'Xin vui lòng nhập Link'
        }]
      }


    };
    ($(".ui.form") as any).form(rules, {
      inline: true,
      on: 'blur'
    });
  }

}