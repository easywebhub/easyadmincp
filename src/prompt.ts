import {DialogController} from 'aurelia-dialog';

export class Prompt {
  static inject = [DialogController];
  person = { firstName: '' };
  constructor(private controller){
    this.controller = controller;
  }
  activate(person){
    this.person = person;
  }
}