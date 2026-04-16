import axios from "@/config/axios";

export const getAllblogs = async (params?: object) => {
    try {
        const response = await axios.get("/blog", {
            params,
        });
        return response.data.data;
    } catch (error) {
        throw error;
    }
};

export const getAllBlogCategory = async () => {
    try {
        const response = await axios.get("/blog-category");
        return response.data.data;
    } catch (error) {
        throw error;
    }
};

export const getBlog = async (id: string) => {
    try {
        console.log(id);
        const response = await axios.get(`/blog/${id}`);
        return response.data.data;
    } catch (error) {
        throw error;
    }
};
