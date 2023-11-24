import 'reflect-metadata';
import { Container } from 'inversify';
import { TYPES } from '@/ioc/Types';
import { ApiService } from '@/services/ApiService';
// import { SearchService } from '@/services/SearchService';

const container = new Container();
container.bind<ApiService>(TYPES.ApiService).to(ApiService);
// container.bind<SearchService>(TYPES.SearchService).to(SearchService);

export { container };