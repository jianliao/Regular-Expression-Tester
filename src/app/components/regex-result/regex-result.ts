import {Component, Output, EventEmitter} from 'angular2/core';
import {Input} from "angular2/core";

@Component({
  selector: 'regex-result',
  template: `
    <div>
      <pre [innerHTML]="updateResult(regex, textContent)"></pre>
    </div>`
})
export class RegexResult {
  @Input() regex;
  @Input() textContent;

  updateResult(regex:string = '', textContent:string = '') {
    if (this.isValidRegex(regex)) {
      return textContent.replace(eval(regex), str => `<span>${str}</span>`);
    } else {
      return textContent;
    }
  }

  isValidRegex(regex:string) {
    var isValid = true;
    try {
      eval(regex);
    } catch(e) {
      isValid = false;
    }
    return isValid;
  }
}