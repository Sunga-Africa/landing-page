import axios from "@/config/axios";

export const contactUs = async (payload?: {
  fullname: string;
  email: string;
  message: string;
}) => {
  try {
    const response = await axios.post('/contact', payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

 