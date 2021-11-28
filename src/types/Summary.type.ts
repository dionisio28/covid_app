export interface SummaryProps {
    ID: string;
    Message: string;
    Global: GlobalProps;
    Countries: CountriesProps[];
    Date: Date;
}

export interface GlobalProps {
    NewConfirmed: number;
    TotalConfirmed: number;    
    NewDeaths: number;
    NewRecovered : number;
    TotalDeaths: number;
    TotalRecovered: number;
    Date: Date;
}

export interface CountriesProps {
   ID : string;
   Country: string;
   CountryCode: string;
   Slug: string;
   NewConfirmed: number,
   TotalConfirmed: number,
   NewDeaths: number,
   TotalDeaths: number,
   NewRecovered: number,
   TotalRecovered: number,
}