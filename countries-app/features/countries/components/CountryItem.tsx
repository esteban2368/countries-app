import type { Country } from "@features/countries/models/CountryModel";
interface CountryItemProps {
    country: Country;
}

export const CountryItem = ({ country }: CountryItemProps) => {
    return (
        <div>
            <h3>{country.name}</h3>
            <p>Capital: {country.capital}</p>
            <p>Region: {country.region}</p>
            <p>Population: {country.population}</p>
        </div>
    );
}