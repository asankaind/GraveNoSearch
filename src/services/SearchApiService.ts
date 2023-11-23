import Axios, { AxiosResponse } from "axios";
import { injectable } from "inversify";
import { container } from "@/ioc/DIContainer";
// import { Auth } from "@/services/auth/AuthService";
//import { store } from "@/store";
// import { AxiosConfigHelper } from '@/helpers/AxiosConfigHelper';
import { TYPES } from '@/ioc/Types';

@injectable()
export class SearchApiService {
//   private axiosConfigHelper: AxiosConfigHelper;
//   private store: any = store;
  private instance = Axios.create({
    baseURL: 'https://graverecordssearchapi.azurewebsites.net'
  });
  /**
   *Constructor - setting the base url
   */
  constructor() {
    // get service instances from container
    // this.axiosConfigHelper = container.get<AxiosConfigHelper>(TYPES.AxiosConfigHelper);

    /**
     * Request interceptor
     */
    // this.instance.interceptors.request.use(
    //   async (config: AxiosRequestConfig|any) => {
    //     //   const token = await Auth.Instance.getValidToken();
    //       const accessToken = token.accessToken;
    //         if ( config.headers ) {
    //         config.headers["Authorization"] = "Bearer " + accessToken;
            
    //         if(config.url && !this.axiosConfigHelper.getIgnoreUrlStatus(config.url) && !this.store.state.applicationSettingsStore.isGlobalLoadingEnabled){
    //         //   store.dispatch('applicationSettingsStore/setGlobalLoaderState', true);
    //         }
    //         return config;
    //       }
    //   },
    //   (error: any) => {
    //     if (this.store.state.applicationSettingsStore.isGlobalLoadingEnabled) {
    //       store.dispatch('applicationSettingsStore/setGlobalLoaderState', false);
    //     }
    //     return Promise.reject(error);
    //   }
    // );

    this.instance.interceptors.request.use(function (config) {
        // Do something before request is sent
        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });
    /**
     * Response interceptor
     */
    this.instance.interceptors.response.use(
      async (response: AxiosResponse) => {
        // store.dispatch('applicationSettingsStore/setGlobalLoaderState', false);
        return response;
      },
      (error: any) => {
        // store.dispatch('applicationSettingsStore/setGlobalLoaderState', false);
        return Promise.reject(error);
      }
    );
  }
  /**
   * Get Request
   *
   * @param resource - the URI
   * @param params - the request query params
   */
  get(resource: any, params?: any) {
    return this.instance.get(resource, {
      params: params
    });
  }
  /**
   * Post Request
   *
   * @param resource - the URI
   * @param data - the request body
   * @param params - the request query params
   */
  post(resource: any, data: any, params?: any) {
    return this.instance.post(resource, data, {
      params: params
    });
  }

  /**
   * Put Request
   *
   * @param resource - the URI
   * @param data - the request body
   * @param params - the request query params
   */
  put(resource: any, data: any, params?: any) {
    return this.instance.put(resource, data, {
      params: params
    });
  }

  /**
   * Patch Request
   *
   * @param resource - the URI
   * @param data - the request body
   * @param params - the request query params
   */
  patch(resource: any, data: any, params?: any) {
    return this.instance.patch(resource, data, {
      params: params
    });
  }

  customAxiosGet(resource: any, params?: any) {
    const instance = Axios.create();
    return instance.get(resource, {
      params: params,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/x-www-form-urlencoded"
      }
    });
  }
}
