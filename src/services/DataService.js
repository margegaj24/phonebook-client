import http from "../http-common";

class DataService {
  get(url) {
    return http.get(url);
  }

  create(url, data) {
    return http.post(url, data);
  }

  update(url, data) {
    return http.put(url, data);
  }

  partial_update(url, data) {
    return http.patch(url, data);
  }

  delete(url) {
    return http.delete(url);
  }
}

export default new DataService();
