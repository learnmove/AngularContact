import {Component} from "angular2/core"
@Component({
    selector:'contact',
    template:`
        <input type="text" [(ngModel)]="selectname.firstname"  >
        <div>
        信箱:{{selectname.email}}
        電話:{{selectname.phone}}
        </div>
 `,
 inputs:["selectname"]
})
export class Contact{
    public selectname={}
}