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
  text: string;

  constructor() {
  }

  onTextAreaChange(value: string) {
    this.text = value;
    if (this.text != null && this.text.length > 0) {
      var regexp = eval(this.regex);
      this.result = this.text.replace(regexp, str => `<span>${str}</span>`);
    }
  }

  onRegexChange(regex: string) {
    this.regex = regex;
    var isValid = true;
    try {
      eval(this.regex);
    } catch(e) {
      isValid = false;
      console.log('Invalid reg expression');
    }
    if (isValid==true && this.text != null) {
      var regexp = eval(this.regex);
      this.result = this.text.replace(regexp, str => `<span>${str}</span>`);
    }
  }

  ngOnInit(){
    this.result = "";
  }
}
