import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("country/:countryId", "routes/country/Country.tsx") //Ruta de detalle de país>
] satisfies RouteConfig;

