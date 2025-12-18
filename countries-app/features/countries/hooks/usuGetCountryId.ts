import { useQuery } from "@tanstack/react-query"
import { CountryService } from "@features/countries/services/CountryService";

export const useGetCountryId = (countryId: string) => {
    return useQuery({
        queryKey: ['country'],
        queryFn: () => 
            CountryService.getCountryById(countryId),
    });
};