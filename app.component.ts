import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Meu Blog';
  jsonPosts: object[];
  


  constructor () {
 this.jsonPosts = [
      {  
          id:1,
          texto:"teste 1",
          datahora:new Date ('2019-04-04T07:00:00').toLocaleString(),
       }, {  
          id:2,
          texto:"teste2",
          datahora:new Date ('2019-05-04T07:00:00').toLocaleString(),
       }, 
       {  
          id:3,
          texto:"teste3",
          datahora:new Date ('2019-06-04T07:00:00').toLocaleString(),
       },
    ];
  }
  public adicionarPost(): void {
     ;
  };
};


