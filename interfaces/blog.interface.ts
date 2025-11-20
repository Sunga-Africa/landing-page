interface Category {
    id: number;
    name: string;
    slug: string;
    created_at: string;
    updated_at: string;
}

interface Blog {
    id: number;
    slug: string;
    title: string;
    short_description: string;
    image: string;
    body: string;
    created_at: string;
    updated_at: string;
    category: Category;
}
