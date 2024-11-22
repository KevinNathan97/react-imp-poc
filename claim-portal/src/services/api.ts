import { Claim } from "../types/claim";

export const submitClaim = async (claimData: Claim): Promise<Claim> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ...claimData,
        id: Date.now(),
      });
    }, 1000);
  });
};
