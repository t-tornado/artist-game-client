import { BaseService } from "../core";

const Endpoints = {
  getArtiste3RandAlbums: `/artist/getRandomAlbums`,
};

class ArtisteServiceClass extends BaseService {
  endpoints: typeof Endpoints;

  constructor(endpoints: any) {
    super();
    this.endpoints = endpoints;
  }

  async getArtistRandomAlbums(artiste: string) {
    const data = await this.client?.get(
      `${this.endpoints.getArtiste3RandAlbums}?name=${artiste}`
    );
    return data?.data;
  }
}

export const ArtisteService = new ArtisteServiceClass(Endpoints);
