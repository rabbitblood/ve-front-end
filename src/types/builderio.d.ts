//ve type info
export interface VeAllTypeInfo {
  typeInfos?: TypeInfosEntity[] | null;
}
export interface TypeInfosEntity {
  typeInfo: TypeInfo;
}
export interface TypeInfo {
  seriesInfo?: SeriesInfoEntity[] | null;
  type: Type;
}
export interface SeriesInfoEntity {
  serieShortDescription: string;
  series: Series;
  seriesFeatureImages?: SeriesFeatureImagesEntity[] | null;
  descriptionPageSections?: (DescriptionPageSectionsEntity | null)[] | null;
  middleBannerShow: string;
}
export interface Series {
  seriesName: string;
}
export interface SeriesFeatureImagesEntity {
  image: string;
}
export interface DescriptionPageSectionsEntity {
  textSections: TextSections;
}
export interface TextSections {
  paragraph?: string;
  secionType: string;
  title?: string;
  image?: string;
  swapTextAndImagePosition?: boolean;
}
export interface Type {
  typeName: string;
}
