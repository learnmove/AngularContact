import {Component} from 'angular2/core';
import {ContactListComponent} from './contacts/contact-list.component'
import {ROUTER_DIRECTIVES} from 'angular2/router'
import {RouteConfig} from 'angular2/router'
import {NewComponent} from './contacts/new-contact.component'
import {HttpTestComponent} from './http-test.component'
@Component({
    
    selector: 'my-app',
    template:`
            <header>
                <nav>
                <a [routerLink]="['/Contacts']">Contacts</a>
                <a [routerLink]="['/NewComponent']">new</a>
                </nav>
            </header>
            <div class="main">
            <router-outlet></router-outlet>
            <http-test></http-test>
            <div class="pipes">
            <h2>Pipe Data</h2>
            {{date|date:'fullDate'}}
            <h2>Pipe number</h2>
            {{1.55|number:'1.1-4'}}
              <h2>Pipe 貨幣</h2>
            {{133|currency:'EUR':true}}
            </div>
            </div>
        
         `,
    directives:[HttpTestComponent,ContactListComponent,ROUTER_DIRECTIVES,NewComponent],
     styleUrls:['../src/css/app.css']
})
@RouteConfig([
    {path:'/contacts',name:'Contacts',component:ContactListComponent,useAsDefault:true},
    {path:'/newcontact',name:'NewComponent',component:NewComponent}
    
])
export class AppComponent {
date=new Date();
}