export type FormValues = { field: string, order: 1 | -1 };
export type SortFields = { [key: string]: string };
export type DocumentsSorterProps = { fields: SortFields };
export type DocumentsSorterFC = (props: DocumentsSorterProps) => JSX.Element;
