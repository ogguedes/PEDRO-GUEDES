
export interface Plan {
  id: string;
  name: string;
  oldPrice?: string;
  price: string;
  period: string;
  features: string[];
  buttonText: string;
  checkoutUrl: string;
  popular?: boolean;
  badge?: string;
  style?: string;
  isCustom?: boolean;
}

export interface Notification {
  id: number;
  name: string;
  product: string;
  location: string;
  time: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  stars: number;
}
