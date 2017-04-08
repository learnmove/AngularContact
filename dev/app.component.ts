import {Component} from 'angular2/core';
import {ContactListComponent} from './contacts/contact-list.component'
@Component({
    
    selector: 'my-app',
    template:`
              <contact-list><contact-list>
        
         `,
    styleUrls:['../src/css/app.css'],
    directives:[ContactListComponent],
        
})
export class AppComponent {

}