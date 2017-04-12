import { HttpService } from './http-test.service';
import {Component} from 'angular2/core';

@Component({
    selector:'http-test',
    template:`
    <div>
    
    <button (click)="getData()">getdata</button>
        <div>{{getjsonData}} </div>
         <button (click)="getPost()">getdata</button>
        <div>{{postjsonData}} </div>
    </div>
       

    `,
    providers:[HttpService]

})
export class HttpTestComponent {
    getjsonData:string;
    postjsonData:string;
constructor(private httpservice:HttpService){}
getData(){
    this.httpservice.getTime().subscribe(data=>this.getjsonData=JSON.stringify(data));
}
getPost(){
    this.httpservice.postJson().subscribe(data=>this.postjsonData=JSON.stringify(data),
    err=>console.log(err),
    ()=>console.log('finish')
    );
}

}