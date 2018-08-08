import axios from "axios";

export const getBestseller = () => axios.get('/api/book/getBestseller');