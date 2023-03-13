import request from "./request";

export default class Cars {
  static createCar(data: any) {
    console.log("++++++++++++++++++++");
    console.log("++++++++++++++++++++");
    return request({
      url: "/cars",
      method: "POST",
      data,
    });
  }
}
