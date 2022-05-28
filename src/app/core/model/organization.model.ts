
export interface Organization {
    id: number
    name: string;
    email: string;
    phone: string;
    country: string;
    city: string;
    street: string;
    zip: string;
    enabled: boolean;
    created: Date;
}