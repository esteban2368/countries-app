import type{ Country } from "@features/countries/models/CountryModel";
import type { CountryDto } from "@features/countries/mappers/CountryDto";

export class CountryMapper {
    static toDomain(dto: CountryDto): Country {
        return {
            id: dto.cca2,
            name: dto.name.common,
            population: dto.population,
            region: dto.region,
            capital: dto.capital,
            flag: dto.flags.svg
        }
    }

    static toDomainList(dtos: CountryDto[]): Country[] {
        return dtos.map(this.toDomain);
    } 
}