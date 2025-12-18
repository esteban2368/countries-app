import { CountryItem } from "@features/countries/components/CountryItem";

import type { Country } from "@features/countries/models/CountryModel";

interface CountriesListProps {
    countries?: Country[];
}
export const CountriesList = ({ countries }: CountriesListProps) => {
    return (
        <div>
            {countries?.map((country) => (
                <CountryItem 
                    key={country.id} 
                    country={country} 
                />
            ))}
        </div>
    );
}