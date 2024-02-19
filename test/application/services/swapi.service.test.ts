import { SwapiService } from '../../../src/application/services/swapi.service'
import { SwapiRepository } from '../../../src/domain/repositories/swapi.repository.interface';

describe('SwapiService', () => {
  let swapiService: SwapiService;
  let mockSwapiRepository: SwapiRepository;

  beforeEach(() => {
    mockSwapiRepository = {
      callApiRoot: jest.fn(),
      callApiForResource: jest.fn(),
      callApiForResourceWithId: jest.fn()
    };

    swapiService = new SwapiService(mockSwapiRepository);
  });

  describe('apiCall', () => {
    it('should call callApiRoot if no resource is specified', async () => {
      (mockSwapiRepository.callApiRoot as jest.Mock).mockResolvedValueOnce({});

      await swapiService.apiCall();

      expect(mockSwapiRepository.callApiRoot).toHaveBeenCalled();
    });

    it('should call callApiForResource if a resource is specified without ID', async () => {
      const resource = 'people';

      (mockSwapiRepository.callApiForResource as jest.Mock).mockResolvedValueOnce({});

      await swapiService.apiCall(resource);

      expect(mockSwapiRepository.callApiForResource).toHaveBeenCalledWith(resource);
    });

    it('should call callApiForResourceWithId if a resource is specified with ID', async () => {
      const resource = 'people';
      const id = '1';

      (mockSwapiRepository.callApiForResourceWithId as jest.Mock).mockResolvedValueOnce({});

      await swapiService.apiCall(resource, id);

      expect(mockSwapiRepository.callApiForResourceWithId).toHaveBeenCalledWith(resource, id);
    });

    it('should translate the keys into Spanish following the swapi words map', async () => {
      const expected = {
        "nombre": "Luke Skywalker",
        "altura": "172",
        "masa": "77",
        "color_de_pelo": "blond",
        "color_de_la_piel": "fair",
        "color_de_ojos": "blue"
      };

      (mockSwapiRepository.callApiRoot as jest.Mock).mockResolvedValueOnce({
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue"
      });

      const resultObject = await swapiService.apiCall();
      
      expect(resultObject).toEqual(expected);
    });
  });
});
