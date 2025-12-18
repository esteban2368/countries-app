import type { Route } from "./+types/Country";
import { NavLink, useParams } from "react-router";

import { useGetCountryId } from "@features/countries/hooks/usuGetCountryId";

import { CountriesDetails } from "@features/countries/components/CountriesDetails";
import { Button } from "layout/components/Button";

const Country = ({
    loaderData
}: Route.ComponentProps) => {
    let params = useParams();
    const { data: country, isLoading, isError } = useGetCountryId(params.countryId!);

    if (isLoading) {
        return <div>Cargando detalles del país...</div>;
    }

    if (isError) {
        return <div>Error al cargar los detalles del país</div>;
    }

  return (
    <div className="flex flex-col gap-6">
        <NavLink to="/" end>
            <Button>
                Atrás
            </Button>
        </NavLink>
        <CountriesDetails country={country} />
    </div>
  );
}

export default Country;