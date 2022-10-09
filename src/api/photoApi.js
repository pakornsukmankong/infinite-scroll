import axios from "axios";

const apiKey = 'YsFBfdIZ7FVYK5wqxpsLZ_NnmfwizC5vSVaKi7c3p1M'

export const getPhoto = (page = 1) => axios.get(`https://api.unsplash.com/photos/?client_id=${apiKey}&page=${page}`)