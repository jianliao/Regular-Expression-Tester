import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'candidate-text',
  template: `<div>
      <textarea rows="8" cols="50" #text (input)="update.emit(text.value)"></textarea>
    </div>`
})
export class CandidateText {
  @Output() update = new EventEmitter();

  ngOnInit() {
    this.update.emit('');
  }
}