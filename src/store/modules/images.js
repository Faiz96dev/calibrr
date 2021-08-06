import Images from "@/services/Images";
import _ from "lodash";
import {orderTypes} from "@/helpers/filterHelper";
import router from '@/router';



export default {
    namespaced: true,
    state: {
        images: null,
        loading: false,
        filterVal: '',
        orderVal: ''
    },
    mutations: {
        SET_IMAGES(state, images) {
            state.images = images;
        },

        SET_FILTER_VAL(state, value) {
            state.filterVal = value;
        },
        SET_ORDER_VAL(state, value) {
            state.orderVal = value;
        },
        SET_LOADING(state, value) {
            state.loading = value;
        },

    },
    actions: {
        async fetchImages({commit}) {
            commit('SET_LOADING', true);
            let response = await Images.fetchImages();
            commit('SET_IMAGES', response.hits);
            commit('SET_LOADING', false);
            return response
        },
        async showDefaultError() {
           await router.push('error')
        },
    },
    getters: {
        getLoadingImages: state => {
            return state.loading
        },

        getImages: state => {
            let filteredImages = state.images
            let currentFilter = state.filterVal
            let currentOrder = state.orderVal
            // let deepClone = _.cloneDeep(filteredImages)

            if (currentFilter) {
                filteredImages = filteredImages.filter(img => img.tags.includes(state.filterVal.toLocaleLowerCase()))
            }
            if (currentOrder) {
                if (currentOrder === orderTypes.COMMENTS_HIGH.value) filteredImages = _.orderBy(filteredImages, [img => img.comments], ['desc']);
                if (currentOrder === orderTypes.COMMENTS_LOW.value) filteredImages = _.orderBy(filteredImages, [img => img.comments], ['asc']);
                if (currentOrder === orderTypes.LIKES_HIGH.value) filteredImages = _.orderBy(filteredImages, [img => img.likes], ['desc']);
                if (currentOrder === orderTypes.LIKES_LOW.value) filteredImages = _.orderBy(filteredImages, [img => img.likes], ['asc']);
            }

            return filteredImages || []
        },
    },
};