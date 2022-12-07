export type CityInput = {
  cityId?: string;
};

export type SearchInput = {
  query?: string;
};

export type Metric = {
  Value?: number;
  Unit?: string;
};

export type SimpleWeatherObject = {
  Key: string;
  KeyIndex: string;
  EnglishName?: string;
  WeatherIcon?: string;
  Temperature?: {Metric?: Metric};
};

export type CitySearchWeatherObject = {
  Key: string;
  LocalizedName?: string;
};

export type WeatherDayObject = {
  Key: string;
  LocalObservationDateTime?: string;
  WeatherIcon?: string;
  Temperature?: {Metric?: Metric};
  EpochTime?: number;
};

export type WeatherTimeObject = {
  Key: string;
  DateTime?: string;
  WeatherIcon?: string;
  Temperature?: Metric;
  EpochDateTime?: number;
};
