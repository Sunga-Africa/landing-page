import axios from "@/config/axios";

export const bootcampWaitlist = async (payload?: {
    fullname: string;
    email: string;
    expectations: string;
}) => {
    try {
        const response = await axios.post("/waitlist", payload);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getBootcamp = async () => {
    try {
        const response = await axios.get("/bootcamp");
        return response.data.data;
    } catch (error) {
        throw error;
    }
};

export const getBootcampMemberCheck = async (data: object) => {
    try {
        const response = await axios.post("/bootcamp-members-check", data);
        return response.data.data;
    } catch (error) {
        throw error;
    }
};
