import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../../app/getdata.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  saveData:any;

  constructor(private api: GetdataService) { }

  ngOnInit() {
      this.api.getData().subscribe(
        (resp) => {
          this.saveData = new Object(resp);
        });
    }
  }


