import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {PackageListModel} from '../models/packagelistmodel';
import { environment } from '../../environments/environment';

@Injectable()

export class PackageService {

    apiBaseUrl = environment.apiUrl;

    constructor(private _http: Http) {

    }

    public getPackage(): Observable<PackageListModel[]> {

        let apiURL = apiBaseUrl+'/package-lists';
        return this._http.get(apiURL).map(res => {
            return res.json().details.map(
                (response) => {
                    return <PackageListModel[]> response;

                }
            );
        });
    }

    public getPackageDetails(id): Observable<PackageListModel>{

        let apiURL = apiBaseUrl+'/package-details';
        return this._http.post(apiURL , {id:id}).map(res => {
            return res.json().package_details;

        });

    }
}
