import request from "./request";

export default class Cars {
  static createCar(
    data: any,
    token: string,
    useRefreshToken: (token: string) => Promise<void>,
    refreshToken: string
  ) {
    return request(
      {
        url: "/cars/",
        method: "POST",
        data,
        headers: { "Content-Type": "multipart/form-data" },
      },
      token,
      useRefreshToken,
      refreshToken
    );
  }

  static getCars() {
    return request({
      url: "/cars/",
      method: "GET",
    });
  }

  static getCar(id: string) {
    return request({
      url: "/cars/" + id,
      method: "GET",
    });
  }
}
