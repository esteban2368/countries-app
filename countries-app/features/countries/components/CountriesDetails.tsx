import { Image } from "layout/components/Image";
import type { Country } from "@features/countries/models/CountryModel";

interface CountriesDetailsProps {
    country: Country | undefined;
}

export const CountriesDetails = ({ country }: CountriesDetailsProps) => {
    return (
        <div className="grid grid-cols-2 grid-rows-3 gap-8">
            {country && (
                <>
                    <div>
                        <Image 
                            src={country.flag} 
                            alt={`Bandera de ${country.name}`} 
                            classCss="w-full object-cover mb-4" 
                            height={300}
                        />
                    </div>
                    <div className="flex items-center">
                        <div>
                            <h3 className="font-bold text-4xl mb-10">{country.name}</h3>
                            <p><span className="font-bold text-lg">Capital:</span> {country.capital}</p>
                            <p><span className="font-bold text-lg">Region:</span> {country.region}</p>
                            <p><span className="font-bold text-lg">Population:</span> {country.population?.toLocaleString('es-ES')}</p>
                        </div>
                    </div>
                </>       
            )}
        </div>
    );
}
