import { Component, OnInit } from '@angular/core';
import {PackageListModel} from '../models/packagelistmodel';
import {PackageService} from '../services/packageservice';

@Component({
  selector: 'app-package-listing',
  templateUrl: './packagelisting.component.html',
  styleUrls: ['./packagelisting.component.css']
})
export class PackageListingComponent implements OnInit {

	packagelist :PackageListModel[];

  constructor(public  _packageService:PackageService) { }

  ngOnInit() {
  	 this.getPackagelist();
  }

    getPackagelist(){
    this._packageService.getPackage().subscribe((data)=> {
      this.packagelist=data
      console.log(this.packagelist);


        } );

  }

}
