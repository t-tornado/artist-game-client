import { BaseService } from "../core";

const Endpoints = {
  createUser: "/user",
  getUsers: "/user/all",
};

class UserServiceClass extends BaseService {
  endpoints: typeof Endpoints;
  constructor(endpoints: any) {
    super();
    this.endpoints = endpoints;
    this.createUser = this.createUser.bind(this);
    this.getUsers = this.getUsers.bind(this);
  }

  async createUser(params: { username: string; score: number }) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.client?.post(
          `${this.endpoints.createUser}`,
          params
        );
        if (response?.data.message.success) {
          resolve(true);
        } else throw new Error("Failed to create user");
      } catch (error: any) {
        reject({ message: "Username already exists" });
      }
    });
  }

  async getUsers() {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await this.client?.get(`${this.endpoints.getUsers}`);
        resolve(data?.data);
      } catch (error: any) {
        console.log(error);
        reject(error);
      }
    });
  }
}

export const UserService = new UserServiceClass(Endpoints);
