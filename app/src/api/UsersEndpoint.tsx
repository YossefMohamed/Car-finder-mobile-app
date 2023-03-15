import request from "./request";

export default class Users {
  static userRegister(data: any) {
    return request({
      url: "/users/register",
      method: "POST",
      data,
    });
  }

  static userLogin(data: any) {
    return request({
      url: "/users/login",
      method: "POST",
      data,
    });
  }
}
