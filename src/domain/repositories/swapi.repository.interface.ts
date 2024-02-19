export interface SwapiRepository {
  callApiRoot(): Promise<Object>;
  callApiForResource(resource: string): Promise<Object>;
  callApiForResourceWithId(resource: string, id: string): Promise<Object>;
}