import { SwapiHttpRepository } from '../../../src/infrastructure/swapi/swapi.repository';
import axios, { AxiosInstance } from 'axios';

describe('SwapiHttpRepository', () => {
  let swapiHttpRepository: SwapiHttpRepository;
  let mockAxios: AxiosInstance;

  beforeEach(() => {
    mockAxios = {
      get: jest.fn().mockResolvedValueOnce({ data: {} })
    } as unknown as AxiosInstance;

    swapiHttpRepository = new SwapiHttpRepository();

    swapiHttpRepository['client'] = mockAxios;    
  });

  it('should call client.get with empty string for callApiRoot', async () => {
    await swapiHttpRepository.callApiRoot();

    expect(mockAxios.get).toHaveBeenCalledWith('');
  });

  it('should call client.get with the specified resource for callApiForResource', async () => {
    const resource = 'people';
    await swapiHttpRepository.callApiForResource(resource);

    expect(mockAxios.get).toHaveBeenCalledWith(`/${resource}`);
  });

  it('should call client.get with the specified resource and id for callApiForResourceWithId', async () => {
    const resource = 'people';
    const id = '1';
    await swapiHttpRepository.callApiForResourceWithId(resource, id);

    expect(mockAxios.get).toHaveBeenCalledWith(`/${resource}/${id}`);
  });
});