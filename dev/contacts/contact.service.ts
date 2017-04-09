import {Injectable} from "angular2/core"
import {Contactinterface} from './contact'
import {CONTACTS} from "./mock-contact"
@Injectable()
export class ContactService{
    getContact(){
        return Promise.resolve(CONTACTS);
    }
    insertContact(contact:Contactinterface){
        return Promise.resolve(CONTACTS).then((contacts:Contactinterface[])=>{contacts.push(contact)});
    }
}