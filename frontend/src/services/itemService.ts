import api from './api';
import { Item, ItemFormData } from '../types/item';

export const itemService = {
  getAll: ()                     => api.get<Item[]>('/items'),
  getById: (id: number)          => api.get<Item>(`/items/${id}`),
  create: (data: ItemFormData)   => api.post<Item>('/items', data),
  update: (id: number, data: Partial<ItemFormData>) => api.patch<Item>(`/items/${id}`, data),
  delete: (id: number)           => api.delete(`/items/${id}`),
};
