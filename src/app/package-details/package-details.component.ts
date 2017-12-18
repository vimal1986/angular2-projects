import { Component, OnInit } from '@angular/core';
import {PackageService} from "../services/packageservice";
import {PackageListModel} from "../models/packagelistmodel";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.css']
})
export class PackageDetailsComponent implements OnInit {
  package_id:any;

  constructor(private _packageService : PackageService,private route: ActivatedRoute) { }

  packageDetails : PackageListModel;

  ngOnInit() {
   this.route.params.subscribe((params:any) => {
      this.package_id=params.id;
    });
    console.log(this.package_id);
    this.getPackageDetails(this.package_id);
  }

  getPackageDetails(id) {
    this._packageService.getPackageDetails(id).subscribe(data =>{
        this.packageDetails = data;
        console.log(this.packageDetails);

    });
  }

}
