import { useQuery } from "@tanstack/react-query"
import { CountryService } from "@features/countries/services/CountryService";

export function useCountries() {
    return useQuery({
        queryKey: ['countries'],
        queryFn: CountryService.getCountries,
    });
}