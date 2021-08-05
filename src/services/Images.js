import Api from "@/services/Api";

export default {

    fetchImages(requestParams) {
        return Api().get('', {params: requestParams});
    },

}