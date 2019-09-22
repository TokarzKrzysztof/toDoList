import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-input-area',
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.css']
})
export class InputAreaComponent implements OnInit {
  userInput: string = '';
  tasks = [];
  constructor() { }

  ngOnInit() {
  }
  addTask(e) {
    if (this.userInput !== "") {
      this.tasks.push(this.userInput);
      this.userInput = '';
      e.target.previousElementSibling.value = '';
    } else {
      window.alert('musisz coś wpisać!');
    }
  }
  handleInput(e: any) {
    this.userInput = e.target.value;
  }

}
