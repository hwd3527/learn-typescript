interface Country {
  Country: string;
  CountryCode: string;
  Date: string;
  ID: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  Premium: object;
  Slug: any;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

interface Global {
  Date: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovred: number;
}

interface CovidSummayResponse {
  Countries: Country[];
  Date: string;
  Global: Global;
  ID: string;
  Message: string;
}

interface CountrySummaryInfo {
  Cases: number;
  City: string;
  CityCode: string;
  Country: string;
  CountryCode: string;
  Date: Date;
  Lat: string;
  Lon: string;
  Province: string;
  Status: string;
}

type CountrySummaryResponse = CountrySummaryInfo[];

export {
  CovidSummayResponse,
  CountrySummaryResponse,
  Country,
  CountrySummaryInfo,
};
