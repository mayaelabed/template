import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'template';
  color='blue';
  name='maya';
  surname='elabed';
  getName(){
    return this.name;
  }
  getSurName(){
    return this.surname;
  }
  msg: string = 'Good Morning!';

  changeMsg(): void {
    this.msg = 'Helloo ,Maya!';
    }
   
    updateName(newName: string): void {
      this.name = newName;
    }
}
