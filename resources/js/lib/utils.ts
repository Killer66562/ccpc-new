import { route } from "ziggy-js";
import { router } from "@inertiajs/vue3";
import { toast } from 'vue3-toastify';

export function toNamedRoute(routeName: string) {
    router.visit(route(routeName));
}

export function toastErrors(errors: object) {
    const errs = Object.entries(errors);
    errs.forEach((error) => {
        toast(
            `${error[0]}: ${error[1]}`, {
                type: 'error'
            }
        );
    });
}