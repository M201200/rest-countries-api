export type CountryData = {
    name: string;
    topLevelDomain?: (string)[];
    alpha2Code?: string;
    alpha3Code?: string;
    callingCodes?: (string)[];
    capital?: string;
    altSpellings?: (string)[];
    subregion?: string;
    region?: string;
    population?: number;
    latlng?: (number)[];
    demonym?: string;
    area?: number;
    timezones?: (string)[];
    borders?: (string)[];
    nativeName?: string;
    numericCode?: string;
    flags?: Flags;
    currencies?: (CurrenciesEntity)[];
    languages?: (LanguagesEntity)[];
    translations?: Translations;
    flag?: string;
    regionalBlocs?: (RegionalBlocsEntity)[];
    cioc?: string;
    independent?: boolean;
    gini?: number;
  }
type Flags = {
    svg: string;
    png: string;
  }
type CurrenciesEntity = {
    code: string;
    name: string;
    symbol: string;
  }
type LanguagesEntity = {
    iso639_1?: string;
    iso639_2: string;
    name: string;
    nativeName?: string;
  }
  type Translations = {
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa?: string;
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    hu: string;
  }
type RegionalBlocsEntity = {
    acronym: string;
    name: string;
    otherAcronyms?: (string)[];
    otherNames?: (string)[];
  }
  