import type { Route } from "./+types/home";
import { CountriesContainer } from "@features/countries/CountriesContainer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Listado de paises" },
    { name: "description", content: "Listado de paises y su descripcion." },
  ];
}

export default function Home() {
  return <CountriesContainer />;
}