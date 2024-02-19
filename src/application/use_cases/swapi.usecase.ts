import { SwapiService } from "../services/swapi.service";

export class SwapiUseCase {
  private swapiService: SwapiService;

  constructor(swapiService: SwapiService) {
    this.swapiService = swapiService;
  }

  async apiCall(resource?: string, id?: string) {
    return await this.swapiService.apiCall(resource, id);
  }
}