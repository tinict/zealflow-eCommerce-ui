export interface Ward {
  code: string;
  name: string;
}

export interface District {
  code: string;
  name: string;
  wards: Ward[];
}

export interface Province {
  code: string;
  name: string;
  districts: District[];
}
