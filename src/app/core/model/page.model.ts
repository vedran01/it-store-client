
export interface Page<T> {
    data: T[];
    size: number
    number: number;
    pages: number;
    elements: number;
    total: number;
}