import { OnInit } from 'angular2/src/core/linker/interfaces';
import { ContactService } from './contact.service';
import {Contactinterface} from './contact'
import {Component} from 'angular2/core'
import {Router} from 'angular2/router'
import {RouteParams} from 'angular2/router'
import { FormBuilder,Validators,ControlGroup } from 'angular2/common';
@Component({
selector:'new-comp',
directives:[],
styles:[`.ng-invalid{
  border:1px solid red;
}`],
template:`  
<form [ngFormModel]="myform" (ngSubmit)="addcontact()" >
<div>
      <div>信箱: 
    <input type="text" name="email" [ngFormControl]="myform.controls['email']" >  </div>
    <span *ngIf="!myform.controls['email'].valid">要填</span>
  <div>電話:
    <input type="text" name="phone"[ngFormControl]="myform.controls['phone']"  ></div>
  <div>暱稱: 
    <input type="text"    [ngFormControl]="myform.controls['lastname']"></div>
  <div>大名:
    <input type="text" [ngFormControl]="myform.controls['firstname']"  >
    </div>
</div>
<button type="submit" [disabled]="!myform.valid">new</button>

<pre>
{{myform.value|json}}
</pre>
</form>

`,
providers:[ContactService],
})
export class NewComponent implements OnInit{
  myForm:ControlGroup
  public person:Contactinterface={firstname:'',lastname:'',email:'',phone:''}
        constructor(private contactService:ContactService,private router:Router,private rparams:RouteParams,private fb:FormBuilder){}
        addcontact(){
          // const dummycontact={firstname:this.person.firstname,lastname:this.person.lastname,phone:this.person.phone,email:this.person.email,fb:};
          const dummycontact=this.person;
          console.log(dummycontact);
          this.contactService.insertContact(dummycontact);
          this.router.navigate(['Contacts']);
        }
        ngOnInit():any {
          this.myform=this.fb.group({
            'firstname':[],
            'lastname':[],
            'phone':[],
            'email':[,Validators.required]
          });
         this.person= this.rparams.get('person');

        console.log(this.person);
         
        }
}