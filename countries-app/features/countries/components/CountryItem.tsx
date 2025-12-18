import { NavLink } from "react-router";

import { Image } from "layout/components/Image";
import type { Country } from "@features/countries/models/CountryModel";
interface CountryItemProps {
    country: Country;
}

export const CountryItem = ({ country }: CountryItemProps) => {
    return (
        <NavLink 
            key={country.id}
            to={`/country/${country.id}`}
            viewTransition
        >
            <div className="m-0 p-0 bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-200">
                <div className="">
                    <Image 
                        src={country.flag} 
                        alt={`Bandera de ${country.name}`} 
                        classCss="w-full h-48 object-cover mb-4" 
                    />
                </div>
                <div className="p-5">
                    <h3 className="text-2xl mb-3">{country.name}</h3>
                    <ul>
                        <li>
                           <span className="font-semibold">Population:</span> {country.population}
                        </li>
                        <li>
                           <span className="font-semibold">Region:</span> {country.region}
                        </li>
                        <li>
                           <span className="font-semibold">Capital:</span> {country.capital}
                        </li>
                    </ul>
                </div>
            </div>
        </NavLink>
    );
}