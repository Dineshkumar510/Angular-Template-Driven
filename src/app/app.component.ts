import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  password;
  show = false;

  ngOnInit() {
    this.password = 'password';
  }

  subscriptions = ['Basic', 'Advanced', 'Pro']
  selectedSubscription = 'Advanced';
  @ViewChild('signupForm', {static: false}) signForm: NgForm

  onSubmit(){
    console.log(this.signForm.value);
  }

  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }

}
