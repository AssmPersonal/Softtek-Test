import { SwapiService } from '../../../src/application/services/swapi.service'
import { SwapiUseCase } from '../../../src/application/use_cases/swapi.usecase'

describe('SwapiUseCase', () => {
  let swapiUseCase: SwapiUseCase;
  let mockSwapiService: SwapiService;

  beforeEach(() => {
    mockSwapiService = {
      apiCall: jest.fn()
    } as unknown as SwapiService;

    swapiUseCase = new SwapiUseCase(mockSwapiService);
  });

  it('should call swapiService.apiCall with the provided resource and id', async () => {
    const resource = 'people';
    const id = '1';

    await swapiUseCase.apiCall(resource, id);

    expect(mockSwapiService.apiCall).toHaveBeenCalledWith(resource, id);
  });
});