export type ClaimStatus = 'pending' | 'approved' | 'rejected';

export interface Claim {
  id: number;
  item_id: number;
  user_id: number;
  message: string;
  status: ClaimStatus;
  created_at: string;
}

export interface ClaimFormData {
  item_id: number;
  message: string;
}
