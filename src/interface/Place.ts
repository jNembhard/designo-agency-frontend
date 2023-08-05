export interface IPlace {
  LocationID: string;
  name: string;
  images: IPlaceImages;
  slug: string;
}

interface IPlaceImages {
  icon: string;
}
