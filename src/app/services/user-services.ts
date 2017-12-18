import { Http , Response } from '@angular/http';
import {Injectable} from "@angular/core";
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()

export class UserServices {

   apiBaseUrl = environment.apiUrl;

    constructor (private _http : Http){

    }

    public submitRegister(userData) : any {

        let apiURL = apiBaseUrl+'/auth/register';

        return this._http.post(apiURL , userData).map(res => {
            return res.json()

        });
    }

    public doLogin (userData) : any {

        let apiURL = apiBaseUrl+"/auth/login";

        return this._http.post(apiURL, userData).map( res => {
            return res.json()
        });
    }
    public resetPassword (userData) : any {
        let apiURL = apiBaseUrl+"/auth/reset";

        return this._http.post(apiURL, userData).map( res => {
            return res.json()
        });
    }

}
