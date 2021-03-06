import {
  ValidationRenderer,
  RenderInstruction,
  ValidateResult
} from 'aurelia-validation';

export class SemanticFormRendererThinh {
  /**
   *
   */
  private _renderable = true;
  constructor(renderable?:boolean ) {
    if(renderable == false){
      this._renderable= renderable;
    }
  }
  
  render(instruction: RenderInstruction) {
    if(!this._renderable){
      return;
      
    }
    for (let { result, elements } of instruction.unrender) {
      for (let element of elements) {
        this.remove(element, result);
      }
    }

    for (let { result, elements } of instruction.render) {
      for (let element of elements) {
        this.add(element, result);
      }
    }
  }

  add(element: Element, result: ValidateResult) {
    if (result.valid) {
      return;
    }

    const formGroup = element.closest('.field');
    if (!formGroup) {
      return;
    }

    // add the has-error class to the enclosing form-group div
    formGroup.classList.add('error');

    // add help-block
    const message = document.createElement('span');
    message.className = 'ui basic red pointing prompt label transition visible';
    message.textContent = result.message;
    message.id = `validation-message-${result.id}`;
    formGroup.appendChild(message);
  }

  remove(element: Element, result: ValidateResult) {
    if (result.valid) {
      return;
    }

    const formGroup = element.closest('.field');
    if (!formGroup) {
      return;
    }

    // remove help-block
    const message = formGroup.querySelector(`#validation-message-${result.id}`);
    if (message) {
      formGroup.removeChild(message);

      // remove the has-error class from the enclosing form-group div
      if (formGroup.querySelectorAll('.ui .basic .red .pointing .prompt .label .transition .visible').length === 0) {
        formGroup.classList.remove('error');
      }
    }
  }
}