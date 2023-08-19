export interface IPlace {
  LocationID: string;
  title: string;
  images: IPlaceImages;
  slug: string;
}

interface IPlaceImages {
  icon: string;
}
