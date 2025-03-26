export interface IProduct {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string | null;
}

export type TProductWithoutId = Omit<IProduct, 'id'>