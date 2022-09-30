import { HttpClient } from "./http-client";

export abstract class BaseService {
  client: typeof HttpClient;
  abstract endpoints: unknown;
  constructor() {
    this.client = HttpClient;
  }
}
