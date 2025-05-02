import { route } from "ziggy-js";
import { router } from "@inertiajs/vue3";

export function toNamedRoute(routeName: string) {
    router.visit(route(routeName));
}