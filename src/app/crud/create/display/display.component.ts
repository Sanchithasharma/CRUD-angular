import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/people.service';
import {Router} from '@angular/router';


export interface PeopleList {
  firstName: string;
  lastName: string;
  age: string;
  email: string;
  phone: string;
}

// const ELEMENT_DATA: PeopleList[] = [
// {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
// {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
// {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
// {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
// {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
// {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
// {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
// {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
// {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
// {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
// {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
// {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
// {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
// {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
// {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
// {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
// {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
// {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
// {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})

export class DisplayComponent implements OnInit {
  // name = new FormControl(''); 

  displayedColumns: any
  dataSource: any
  person: any


  constructor(private peopleService: PeopleService, private router: Router) { }


  ngOnInit(): void {
    console.table(this.peopleService.people)
    this.displayedColumns = ['firstName', 'lastName', 'gender', 'email', 'phone', 'delete'];

    this.dataSource = this.peopleService.people;
    this.person = this.dataSource[0].first_name
    console.log(this.person)
  }

  goBackToCreate(): any  {
    console.log('edit')
    this.router.navigate(['/create']);

  }

}
