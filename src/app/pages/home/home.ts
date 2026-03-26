import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  categories = [
    { icon: '🔧', name: 'Home Repairs', count: 120, slug: 'home-repairs' },
    { icon: '💇', name: 'Beauty & Wellness', count: 85, slug: 'beauty' },
    { icon: '📚', name: 'Tutoring', count: 64, slug: 'tutoring' },
    { icon: '🚗', name: 'Vehicle Services', count: 97, slug: 'vehicle' },
    { icon: '🍽️', name: 'Catering', count: 43, slug: 'catering' },
    { icon: '🧹', name: 'Cleaning', count: 76, slug: 'cleaning' },
    { icon: '💻', name: 'IT & Tech', count: 58, slug: 'it-tech' },
    { icon: '🌿', name: 'Gardening', count: 39, slug: 'gardening' },
  ];
}
