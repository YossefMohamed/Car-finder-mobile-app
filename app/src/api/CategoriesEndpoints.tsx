import request from "./request";

export default class Categories {
  static getCategories() {
    return request({
      url: "/category",
      method: "GET",
    });
  }
}
