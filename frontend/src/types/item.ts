export type ItemStatus = 'lost' | 'found' | 'claimed';

export interface Item {
  id: number;
  title: string;
  description: string;
  category: string;
  status: ItemStatus;
  location: string;
  date_reported: string;
  image?: string;
  user_id: number;
  created_at: string;
  updated_at: string;
}

export interface ItemFormData {
  title: string;
  description: string;
  category: string;
  location: string;
  date_reported: string;
  image?: File;
}
