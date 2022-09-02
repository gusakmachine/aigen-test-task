export type DateCreationRangeField = {
    _d: Date,
    _i: string,
    _f: string,
}[];
export type FormValues = {
    id?: string,
    name?: string,
    dateCreationRange?: DateCreationRangeField,
}