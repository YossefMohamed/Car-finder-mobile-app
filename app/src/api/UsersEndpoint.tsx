import request from "./request";

export default class Users {
  static userLogin(data: any) {
    return request({
      url: "/users/register",
      method: "POST",
      data,
    });
  }
}
