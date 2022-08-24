import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeng';
   //slider setting variable
   responsiveOptions;
   //define validable to store dynamic products data
   products:any;
   constructor(private http: HttpClient){
    //slider responsive settings
     this.responsiveOptions = [
       {
           breakpoint: '1024px',
           numVisible: 3,
           numScroll: 3
       },
       {
           breakpoint: '768px',
           numVisible: 2,
           numScroll: 2
       },
       {
           breakpoint: '560px',
           numVisible: 1,
           numScroll: 1
       }
   ];
    //get request
     this.http.get('https://www.testjsonapi.com/products/').subscribe(data => {
       //data storing for use in html component
       this.products = data;
           }, error => console.error(error));
 } 
}
