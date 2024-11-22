export interface Claim {
  id?: number;
  policyNumber: string;
  claimReason: string;
  claimAmount: string;
  file?: File | null;
}
