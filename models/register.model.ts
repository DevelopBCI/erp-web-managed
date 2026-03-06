export interface RegisterFormModel {
  // --- Step 1: Account Information ---
  username: string;
  password: string;
  confirmPassword: string;

  // --- Step 2: Contact Information ---
  contactName: string;
  companyName: string;
  address: string;
  phoneNumber: string;
  email: string;

  // --- Step 3: Business Details ---
  brandName: string; 
  productTypeIds: (number | string)[]; 
  otherProductType?: string;

  // --- Step 4: Marketing Survey ---
  selectedMarketingChannels: string[]; 
  marketingDetails: {
    internet?: string;
    magazine?: string;
    friend?: string;
    other?: string;
  };
}
