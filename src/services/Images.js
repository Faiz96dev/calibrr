import Api from "@/services/Api";

export default {

    fetchImages() {
        return Api().get();
    },

}