import axios, { AxiosInstance } from "axios";

export class SwapiHttpRepository {
  private client: AxiosInstance

  constructor() {
    this.client = axios.create({
      baseURL: "https://swapi.py4e.com/api"
    })
  }

  async callApiRoot(): Promise<Object> {
    const res = await this.client.get('');

    return res.data;
  }

  async callApiForResource(resource: string): Promise<Object> {
    const res = await this.client.get(`/${resource}`);

    return res.data;
  }

  async callApiForResourceWithId(resource: string, id: string): Promise<Object> {
    const res = await this.client.get(`/${resource}/${id}`);

    return res.data;
  }
}