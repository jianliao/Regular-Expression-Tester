import {Component} from 'angular2/core';

@Component({
  selector: 'main',
  providers: [],
  templateUrl: 'app/main.html',
  pipes: []
})
export class Main {

  result: string;
  regex: string;

  constructor() {
  }

  onTextAreaChange(value: string) {
    if (value != null && value.length > 0) {
      var r = new RegExp(this.regex);
      this.result = value.replace(r, str => `<span>${str}</span>`);
    }
  }

  onRegexChange(regex: string) {
    this.regex = regex;
  }

  ngOnInit(){
    this.result = "";
  }
}
