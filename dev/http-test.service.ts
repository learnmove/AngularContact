import {Injectable} from 'angular2/core';
import {Http,Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
@Injectable()

export class HttpService{
    constructor(private _http:Http){}

    getTime(){
    return this._http.get('http://date.jsontest.com/')
    .map(res=>res.json());
}
    postJson(){
        let datajson=JSON.stringify({var1:'hi',var2:'you'});
        let headers=new Headers();
        headers.append('Content-Type','application/x-www-form-urlencoded')
        return this._http.post(`http://validate.jsontest.com/?json=${datajson}`,{headers:headers})
        .map(res=>res.json() );
    }
}