export interface IAbout {
  AboutID: string;
  title: string;
  description: string;
  images: IAboutImageUrls;
}

interface IAboutImageUrls {
  desktop: string;
  tablet: string;
  mobile: string;
  heroPatternDesktop?: string;
  heroPatternMobile?: string;
}
