export interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

export const products: Product[] = [
    {
        id: 1,
        title: "Wireless Noise-Cancelling Headphones",
        price: 24999,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: 2,
        title: "Smart Watch Series X",
        price: 15999,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: 3,
        title: "Premium Leather Backpack",
        price: 7199,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: 4,
        title: "Minimalist Desk Lamp",
        price: 3599,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: 5,
        title: "Ergonomic Office Chair",
        price: 19999,
        image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: 6,
        title: "Mechanical Keyboard",
        price: 10299,
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: 7,
        title: "Portable SSD 1TB",
        price: 8799,
        image: "https://images.unsplash.com/photo-1563208226-eb5298811e59?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: 8,
        title: "Bluetooth Portable Speaker",
        price: 4799,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=1000",
    }
];
