import ApiClient from './ApiClient';

export default {
  getAllProducts() {
    return ApiClient.get(`experiences/?preset=most_popular`);
  },
};
