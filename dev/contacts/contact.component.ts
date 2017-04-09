import {Component} from "angular2/core"
import {Router} from 'angular2/router'
@Component({
    selector:'contact',
    template:`<div>
  <div>信箱: 

    <input type="text" [(ngModel)]="selectname.email"></div>
  <div>電話:

    <input type="text" [(ngModel)]="selectname.phone"></div>
  <div>暱稱: 

    <input type="text" [(ngModel)]="selectname.lastname"></div>
  <div>大名:

    <input type="text" [(ngModel)]="selectname.firstname"></div>
</div>
<button (click)=createcontact() ></button>

 `,
 inputs:["selectname"]
})
export class Contact{
    public selectname={}
    constructor( private router:Router){}
    createcontact(){
      this.router.navigate(['NewComponent',{person:this.selectname}]);
    }
}