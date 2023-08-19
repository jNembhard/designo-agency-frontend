export interface IDesign {
  DesignID: string;
  title: string;
  slug: string;
  images: IDesignImageUrls;
  header: string;
}

interface IDesignImageUrls {
  desktop: string;
  desktopLarge?: string;
  tablet: string;
  mobile: string;
}

export interface IDesignMeta {
  DesignID: string;
  slug: string;
  header: string;
}
