import request from "./request";

export default class Cars {
  static createCar(data: any, token) {
    console.log("++++++++++++++++++++");
    return request(
      {
        url: "/cars/",
        method: "POST",
        data,
        headers: { "Content-Type": "multipart/form-data" },
      },
      token
    );
  }
}
