import {Component} from "angular2/core"
import {Contact} from './contact.component'
import {Contactinterface} from './contact'
import {ContactService} from  './contact.service'
import {OnInit} from 'angular2/core'
@Component({
    selector:'contact-list',
    template:`
    <ul>
       <li  *ngFor="#contact of contacts" 
            [class.clicked]="selectname===contact">
                <div (click)="onSelect(contact)" >
            name:{{contact.firstname}} 
                <br>
            
            
                
                </div>
                
                </li>
                
    </ul>
    <contact [selectname]="selectname"></contact>   

 `,
     directives:[Contact],
     styleUrls:['../src/css/app.css'],
     providers:[ContactService]
    
})
export class ContactListComponent implements OnInit {
public contacts:Contactinterface[];
public showdetail=false;
public selectname={};
constructor(private contactservice:ContactService){}
onSelect(name){
this.selectname=name;
this.showdetail=!this.showdetail;
}
getContact(){
    this.contactservice.getContact().then((contacts:Contactinterface[])=>this.contacts=contacts);
}
ngOnInit():any {
  
    this.getContact();
}
}