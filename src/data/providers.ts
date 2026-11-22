export interface Provider {
  name: string;
  service: string; // English category label, matches translations.en.categories.items
  location: string;
  rating: number;
  reviews: number;
}

export const providers: Provider[] = [
  { name: 'Kamal Perera', service: 'Electrical', location: 'Colombo', rating: 4.9, reviews: 84 },
  { name: 'Nimal Silva', service: 'Vehicle Repair', location: 'Kandy', rating: 4.8, reviews: 61 },
  { name: 'Sanduni Fernando', service: 'Beauty & Salon', location: 'Galle', rating: 5.0, reviews: 112 },
  { name: 'Ruwan Jayasinghe', service: 'Photography', location: 'Colombo', rating: 4.7, reviews: 47 },
  { name: 'Dilani Rajapaksa', service: 'Tutoring', location: 'Kandy', rating: 4.9, reviews: 98 },
  { name: 'Suresh Kumar', service: 'Catering', location: 'Jaffna', rating: 4.6, reviews: 39 },
  { name: 'Malini Weerasinghe', service: 'Tailoring', location: 'Matara', rating: 4.8, reviews: 55 },
  { name: 'Chamara Bandara', service: 'Cleaning', location: 'Negombo', rating: 4.5, reviews: 33 },
];

export const featuredProviders = providers.slice(0, 4);
