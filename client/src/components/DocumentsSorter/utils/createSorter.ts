import {FormValues} from "../types";
import {DocumentResponse} from "../../../api/Documents/types";

export const createSorter = (values: FormValues) => {
    const {field, order} = values;

    return (array: DocumentResponse) => {
        return array.sort((first, second) => {
            let a = first[field as keyof typeof first];
            let b = second[field as keyof typeof second];

            if (a < b) {
                return -1 * order;
            }

            if (a > b) {
                return 1 * order;
            }

            return 0;
        });
    };
}