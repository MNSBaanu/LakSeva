import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-booking',
  imports: [RouterLink],
  templateUrl: './booking.html',
  styleUrl: './booking.scss'
})
export class Booking {
  providerId: string | null = null;
  submitted = false;

  constructor(private route: ActivatedRoute) {
    this.providerId = this.route.snapshot.paramMap.get('id');
  }

  onSubmit(e: Event) {
    e.preventDefault();
    this.submitted = true;
  }
}
