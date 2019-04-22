import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Meu Blog';
  jsonPosts: Object = [];



  constructor () {
  console.log(this.jsonPosts = [
      {  
          id:1,
          texto:"Teste1 teste teste",
          datahora:new Date ("2019-04-04T11:25:43.511Z"). toLocaleString()
       }, {  
          id:2,
          texto:"Teste 2 teste  teste ",
          datahora:new Date ("2019-04-04T12:25:43.511Z"). toLocaleString()
       }, 
       {  
          id:3,
          texto:"Teste 3 teste  teste ",
          datahora:new Date ("2019-04-04T12:25:43.511Z"). toLocaleString()
       }
    ])
  }
}
