import { ChangeDetectionStrategy, Component, ElementRef, model, signal, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Signal } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-homepage',
  imports: [RouterModule, MatCardModule, MatDatepickerModule, MatNativeDateModule, MatInputModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  selected = model<Date | null>(null);

isOpen = false;
eventoForm(){
  this.isOpen = !this.isOpen;
}

}
