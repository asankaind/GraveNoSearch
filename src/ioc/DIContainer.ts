import 'reflect-metadata';
import { Container } from 'inversify';
import { TYPES } from '@/ioc/Types';
import { ApiService } from '@/services/ApiService';

const container = new Container();
container.bind<ApiService>(TYPES.ApiService).to(ApiService);

export { container };