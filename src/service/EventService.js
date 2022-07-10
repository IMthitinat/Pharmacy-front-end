import axios from "axios";

const apiClient = axios.create({
    baseURL: process.env.VUE_APP_BACKEND_URL,
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export default {
    getEventLists(perPage, page) {
        return apiClient.get('/drugs?_limit=' + perPage + '&_page=' + page);
    },
    getEvent(id) {
        return apiClient.get('/drugs/' + id);
    },
    addEvent(info) {
        return apiClient.post('/drugs', {
            name: info.name,
            Description: info.description,
            ShortDesc: info.shortDesc,
            HowToTake: info.howToTake
        });
    },
    // delete(id) {
    //     return apiClient.get("/drugs/" + id);
    // },
};