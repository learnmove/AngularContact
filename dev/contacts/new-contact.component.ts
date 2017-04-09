import { OnInit } from 'angular2/src/core/linker/interfaces';
import { ContactService } from './contact.service';
import {Contactinterface} from './contact'
import {Component} from 'angular2/core'
import {Router} from 'angular2/router'
import {RouteParams} from 'angular2/router'
@Component({
selector:'new-comp',
directives:[],
styles:[`.ng-invalid{
  border:1px solid red;
}`],
template:`  
<form #myform="ngForm" (ngSubmit)="addcontact()" >
<div>
      <div>信箱: 
    <input type="text" name="email" [(ngModel)]="person.email" >  </div>
  <div>電話:
    <input type="text" name="phone" [(ngModel)]="person.phone"  ></div>
  <div>暱稱: 
    <input type="text"    [(ngModel)]="person.lastname"></div>
  <div>大名:
    <input type="text" [(ngModel)]="person.firstname"  >
    </div>
</div>
<button type="submit" [disabled]="false">new</button>

<pre>
{{myform.value|json}}
</pre>
</form>

`,
providers:[ContactService],
})
export class NewComponent implements OnInit{
  public person:Contactinterface={firstname:'',lastname:'',email:'',phone:''}
        constructor(private contactService:ContactService,private router:Router,private rparams:RouteParams){}
        addcontact(){
          // const dummycontact={firstname:this.person.firstname,lastname:this.person.lastname,phone:this.person.phone,email:this.person.email};
          const dummycontact=this.person;
          console.log(dummycontact);
          this.contactService.insertContact(dummycontact);
          this.router.navigate(['Contacts']);
        }
        ngOnInit():any {
         this.person= this.rparams.get('person');

        console.log(this.person);
         
        }
}