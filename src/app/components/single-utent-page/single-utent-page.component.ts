import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users-service';

@Component({
  selector: 'app-single-utent-page',
  imports: [],
  templateUrl: './single-utent-page.component.html',
  styleUrl: './single-utent-page.component.css'
})
export class SingleUtentPageComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private userService = inject(UsersService);
   userDetails: any;     // salva i dati completi dell'utente

 ngOnInit(): void {
  this.getUserDetails()
 }


 getUserDetails(){
  const id  =  Number(  this.route.snapshot.paramMap.get('id'));
  this.userService.getUserDetails(id).subscribe((res) =>{
    this.userDetails = res
    console.log(this.userDetails)
  })

 }

}
