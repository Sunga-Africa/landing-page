interface Meta {
    current_page: number;
    last_page_url: string;
    first_page_url: string;
    from: number;
    links: Link[];
    last_page: number;
    per_page: number;
    path: string;
    to: number;
    total: number;
    next_page_url: string | null;
    prev_page_url: string | null;
}

interface Link {
    url: string | null;
    label: string;
    active: boolean;
}
