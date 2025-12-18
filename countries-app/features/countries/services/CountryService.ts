import type { Country } from "@features/countries/models/CountryModel";
import type { CountryDto } from "@features/countries/mappers/CountryDto";
import { CountryMapper } from "@features/countries/mappers/CountryMapper";

const API_URL = import.meta.env.VITE_COUNTRIES_API_URL;
export class CountryService {

    static async getCountries(): Promise<Country[]> {
        const response = await fetch(`${API_URL}/all?fields=name&fields=flags&fields=population&fields=cca2&fields=region&fields=capital`);

        const countries: CountryDto[] = await response.json();

        return CountryMapper.toDomainList(countries);
    }
}