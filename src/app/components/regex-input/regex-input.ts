import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'regex-input',
  template: `<div>
      <label for="regex">Regex: </label>
      <input type="text" name="regex" placeholder="Regular Expression" #regex (input)="update.emit(regex.value)">
    </div>`
})
export class RegexInput {
  @Output() update = new EventEmitter();

  ngOnInit() {
    this.update.emit('');
  }
}