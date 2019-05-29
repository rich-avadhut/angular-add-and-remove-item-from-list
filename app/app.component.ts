import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github';
  games:any;
  newGameName:string;
  constructor(){
    this.games = ["Basketball","Volleyball","Frisbee","Golf","Cricket"];
    this.newGameName = ''
  }

  addGame(gameForm){
    this.games.push(this.newGameName)
    this.newGameName = ''
    gameForm.form.markAsPristine()
  }

  deleteGame(index){
    this.games.splice(index, 1)
  }
}