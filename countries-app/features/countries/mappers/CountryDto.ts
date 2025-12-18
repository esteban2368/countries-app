export interface CountryDto{
    name: CountryNameDto;
    population: number;
    region: string;
    flags: FlagsDto;
    capital: string[];
    cca2: string;
}

interface CountryNameDto {
    common: string;
    oficial: string;
}

interface FlagsDto {
    svg: string;
    alt: string
}