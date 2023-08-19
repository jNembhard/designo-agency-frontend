export interface ILocation {
  LocationID: string;
  title: string;
  images: ILocationImages;
  address: ILocationAddress;
  contact: IContact;
  office: string;
  slug: string;
}

interface ILocationAddress {
  street: string;
  country: string;
}

interface ILocationImages {
  desktop: string;
  tablet: string;
}

interface IContact {
  phone: string;
  email: string;
}
