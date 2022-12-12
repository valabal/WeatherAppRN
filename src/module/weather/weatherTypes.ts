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

export interface WeatherObject {
  Key: string;
  WeatherIcon?: string;
  Temperature?: {Metric?: Metric};
}

export interface SimpleWeatherObject extends WeatherObject {
  KeyIndex: string;
  EnglishName?: string;
}

export type CitySearchWeatherObject = {
  Key: string;
  LocalizedName?: string;
};

export interface WeatherDayObject extends WeatherObject {
  LocalObservationDateTime?: string;
  EpochTime?: number;
}

export type WeatherTimeObject = {
  Key: string;
  DateTime?: string;
  WeatherIcon?: string;
  Temperature?: Metric;
  EpochDateTime?: number;
};
