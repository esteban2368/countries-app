import type { Country } from "@features/countries/models/CountryModel";

const API_URL = import.meta.env.VITE_COUNTRIES_API_URL;
export class CountryService {

    static async getCountries(): Promise<Country[]> {
        const response = await fetch(`${API_URL}/all?fields=name`);
        return await response.json();
    }
}