import {Component} from 'angular2/core';
import {CandidateText} from './components/candidate-text/candidate-text';
import {RegexInput} from './components/regex-input/regex-input';
import {RegexResult} from './components/regex-result/regex-result';

@Component({
  selector: 'main',
  template: `<h3>JavaScript Regular Expressions</h3>
            <candidate-text (update)="textContent = $event"></candidate-text>
            <regex-input (update)="regex = $event"></regex-input>
            <regex-result [textContent]="textContent" [regex]="regex"></regex-result>`,
  directives: [CandidateText, RegexInput, RegexResult]
})
export class Main {

}
