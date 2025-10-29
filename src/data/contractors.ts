export type Contractor = {
  id: string;
  name: string;
  services: string[];
  phone: string;
  website?: string;
  address: {
    street: string;
    city: string;
    state: "NY";
    zip: string;
  };
  rating?: number;
};

export const DUMMY_CONTRACTORS_NY: Contractor[] = [];


