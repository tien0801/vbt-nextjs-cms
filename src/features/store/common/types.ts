export type FormikFilterType = {
  provinceId: number;
  districtId: number;
};

export type FormikDataType = {
  id?: number;
  name: string;
  lat: number;
  lng: number;
  address: string;
  provinceId?: number;
  districtId?: number;
  wardId?: number;
  openTime?: string;
  closeTime?: string;
  active: boolean;
};
