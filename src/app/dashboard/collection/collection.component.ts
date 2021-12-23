import { Component, OnInit } from '@angular/core';
import {HttpService} from "./http.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  dataSource:any = [];

  constructor(private service: HttpService) { }



  ngOnInit(): void {
    this.service.getCharactersData().subscribe(res=>{
      this.dataSource = res.results;
      console.log(this.dataSource)
    });
  }

}
