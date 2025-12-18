import { CountriesList } from "@features/countries/components/CountriesList";

import { useCountries } from "@features/countries/hooks/useCountries";

export const CountriesContainer = () => {
    const { 
        data: countries, 
        isLoading, 
        error 
    } = useCountries();

    if (isLoading) {
        return <div>Cargando paises...</div>;
    }

    if (error) {
        return <div>Error al cargar los paises</div>;
    }
    
    return (
        <div>
            <CountriesList countries={countries} />
        </div>
    )
}