import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'microApp';
 constructor(){
   const chart = document.createElement('script');
   chart.src = 'http://localhost:8080/chart/main.js',
   document.body.appendChild(chart)

   const users = document.createElement('script');
   users.src = 'http://localhost:8080/users/main.js',
   document.body.appendChild(users)
 }
  
}
