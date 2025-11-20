import { create } from "zustand";

interface UserState {
    blogs: {
        data: Blog[];
        meta: Meta;
    };
    categories: {
        created_at: string;
        id: number;
        name: string;
        slug: string;
        updated_at: string;
    }[];
    setCategories: (
        payload: {
            created_at: string;
            id: number;
            name: string;
            slug: string;
            updated_at: string;
        }[]
    ) => void;
    blog: Blog | null;
    setBlogs: (payload: { data: Blog[]; meta: Meta }) => void;
    setBlog: (payload: Blog) => void;
}

const useBlogStore = create<UserState>((set) => ({
    blogs: {
        data: [],
        meta: {
            current_page: 0,
            first_page_url: "",
            from: 0,
            last_page: 0,
            last_page_url: "",
            links: [],
            next_page_url: "",
            path: "",
            per_page: 0,
            prev_page_url: "",
            to: 0,
            total: 0,
        },
    },
    categories: [],
    blog: null,
    setBlogs: async (payload) => {
        set({
            blogs: payload,
        });
    },
    setBlog: (payload) => {
        set({
            blog: payload,
        });
    },
    setCategories: (payload) => {
        set({
            categories: payload,
        });
    },
}));

export default useBlogStore;
