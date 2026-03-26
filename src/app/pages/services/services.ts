import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Provider {
  id: number;
  name: string;
  category: string;
  location: string;
  rating: number;
  reviews: number;
  price: string;
  avatar: string;
  verified: boolean;
}

@Component({
  selector: 'app-services',
  imports: [RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services {
  selectedCategory = 'All';

  categories = ['All', 'Home Repairs', 'Beauty & Wellness', 'Tutoring', 'Vehicle Services', 'Cleaning', 'IT & Tech'];

  providers: Provider[] = [
    { id: 1, name: 'Kamal Perera', category: 'Home Repairs', location: 'Colombo', rating: 4.8, reviews: 124, price: 'Rs. 1,500/hr', avatar: '👨‍🔧', verified: true },
    { id: 2, name: 'Nimal Silva', category: 'IT & Tech', location: 'Kandy', rating: 4.6, reviews: 89, price: 'Rs. 2,000/hr', avatar: '👨‍💻', verified: true },
    { id: 3, name: 'Sanduni Fernando', category: 'Beauty & Wellness', location: 'Galle', rating: 4.9, reviews: 210, price: 'Rs. 1,200/hr', avatar: '💇‍♀️', verified: true },
    { id: 4, name: 'Ruwan Jayawardena', category: 'Vehicle Services', location: 'Colombo', rating: 4.5, reviews: 67, price: 'Rs. 1,800/hr', avatar: '🔩', verified: false },
    { id: 5, name: 'Priya Kumari', category: 'Tutoring', location: 'Negombo', rating: 4.7, reviews: 145, price: 'Rs. 800/hr', avatar: '👩‍🏫', verified: true },
    { id: 6, name: 'Chamara Bandara', category: 'Cleaning', location: 'Kandy', rating: 4.4, reviews: 53, price: 'Rs. 1,000/hr', avatar: '🧹', verified: false },
  ];

  get filtered(): Provider[] {
    if (this.selectedCategory === 'All') return this.providers;
    return this.providers.filter(p => p.category === this.selectedCategory);
  }

  stars(rating: number): string[] {
    return Array(5).fill('').map((_, i) => i < Math.floor(rating) ? '★' : '☆');
  }
}
