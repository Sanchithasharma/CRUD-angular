import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PeopleService } from 'src/app/people.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit { 
  profileForm = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone_number: new FormControl('', Validators.required),
  });
  constructor(private peopleService: PeopleService, private router: Router) { }
  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.peopleService.people.push(this.profileForm.value)
    console.table(this.peopleService.people)
    // this.router.navigate(['/home']);

  }

  ngOnInit(): void {
  }

}
