import { SwapiRepository } from "../../domain/repositories/swapi.repository.interface";
import { SWAPI_MAP_OF_WORDS } from "../shared/constants";

export class SwapiService {
  private swapiRepository: SwapiRepository;
  private mapOfWords: {} = {};

  constructor(swapiRepository: SwapiRepository) {
    this.swapiRepository = swapiRepository;

    this.initializeMapOfWords();
  }

  async apiCall(resource?: string, id?: string): Promise<Object> {
    let data: Object;

    if(resource && id) {
      data = await this.swapiRepository.callApiForResourceWithId(resource, id);
    } else if(resource) {
      data = await this.swapiRepository.callApiForResource(resource);
    } else {
      data = await this.swapiRepository.callApiRoot();
    }

    const iterate = (obj) => {
      if (typeof obj !== 'object' || obj == null) {
        return obj;
      }

      const newObject = Array.isArray(obj) ? [] : {};

      for (const key in obj) {
        if(isNaN(Number(key))) {
          if(this.mapOfWords[key]) {
            newObject[this.mapOfWords[key]] = iterate(obj[key]);
          } else {
            newObject[key] = iterate(obj[key]);
          }
        } else {
          newObject[key] = iterate(obj[key]);
        }
      }

      return newObject;
    }

    const newObject = iterate(data);

    return newObject;
  }

  private initializeMapOfWords() {
    this.mapOfWords = SWAPI_MAP_OF_WORDS;
  }
}