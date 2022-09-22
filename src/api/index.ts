import axios from "axios";
const baseurl = "http://localhost:4200/api";

const endPoints = {
  artiste: {
    getArtiste3RandAlbums: `/artist/getRandomAlbums`,
  },
  user: {
    createUser: "/user",
    getUsers: "/user/all",
  },
};

const API = axios.create({
  baseURL: baseurl,
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
  },
});

class AppAPIClass {
  async getArtistRandomAlbums(artiste: string) {
    const data = await API.get(
      `${endPoints.artiste.getArtiste3RandAlbums}/?name=${artiste}`
    );
    return data.data.data;
  }

  async createUser(params: { username: string; score: number }) {
    return new Promise(async (resolve, reject) => {
      try {
        console.log({ params });
        const response = await API.post(`${endPoints.user.createUser}`, params);
        if (response.data.success) {
          resolve(true);
        } else reject(response.data.error);
      } catch (error: any) {
        console.log({ error });
        reject(error);
      }
    });
  }

  async getUsers() {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await API.get(`${endPoints.user.getUsers}`);
        console.log(data.data);
        resolve(data.data.data);
      } catch (error: any) {
        reject(error);
      }
    });
  }
}

export const AppAPI = new AppAPIClass();
