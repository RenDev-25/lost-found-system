import api from './api';
import { Claim, ClaimFormData } from '../types/claim';

export const claimService = {
  create: (data: ClaimFormData)   => api.post<Claim>('/claims', data),
  getByItem: (itemId: number)     => api.get<Claim[]>(`/claims?item_id=${itemId}`),
  updateStatus: (id: number, status: string) =>
    api.patch<Claim>(`/admin/claims/${id}`, { status }),
};
