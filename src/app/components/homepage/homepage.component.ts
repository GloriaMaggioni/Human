import { ChangeDetectionStrategy, Component, ElementRef, inject, Input, model, OnInit, signal, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Signal } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { UtentsPageComponent } from "../utents-page/utents-page.component";
import { UsersService } from '../../services/users-service';
import { User } from '../../models/users';
import { AsyncPipe, SlicePipe } from '@angular/common';


@Component({
  selector: 'app-homepage',
  imports: [RouterModule, MatCardModule, MatDatepickerModule, MatNativeDateModule, MatInputModule,RouterModule, SlicePipe],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {
  private userService = inject(UsersService)
   limit : number = 30
  currentPage : number = 1
  @Input() offset : number = (this.currentPage - 1) * this.limit;
  
  users : User[] = []
  ngOnInit(): void {
    this.showUtents()
  }

  showUtents(){
    this.userService.getUser(1, undefined, 6)
    this.userService.users$.subscribe({
      next: (data: any) =>{
        this.users = data;
        console.log('Utenti dalla homepage', data)

      }
    })
  }
 


}