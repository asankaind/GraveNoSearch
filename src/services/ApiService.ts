import Axios from 'axios';
import { injectable } from 'inversify';

@injectable()
export class ApiService {
  // constructor () {
  // }

  /**
   * Get Request
   *
   * @param resource - the URI
   * @param params - the request query params
   */
  get (resource: any, params?: any) {
    return Axios.get(resource, {
      params: params
    });
  }

  //   /**
  //  * Get Request
  //  *
  //  * @param resource - the URI
  //  * @param params - the request query params
  //  */
  // get (resource: any) {
  //   return Axios.get(resource);
  // }

  /**
   * Post Request
   *
   * @param resource - the URI
   * @param data - the request body
   * @param params - the request query params
   */
  post (resource: any, data: any, params?: any) {
    return Axios.post(resource, data, {
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
  put (resource: any, data: any, params?: any) {
    return Axios.put(resource, data, {
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
  patch (resource: any, data: any, params?: any) {
    return Axios.patch(resource, data, {
      params: params
    });
  }

  /**
   * Delete Request
   *
   * @param resource - the URI
   * @param params - the request query params
   */
  delete (resource: any, params?: any) {
    return Axios.delete(resource, {
      params: params
    });
  }

  /**
   * Perform a custom Axios request.
   *
   * requestObj is an object, which containing the following properties:
   *  - method
   *  - url
   *  - data ... request payload
   *  - auth (optional)
   *
   * @param requestObj
   */
  customRequest (requestObj: any) {
    return Axios(requestObj);
  }

  /**
   * Custom Axios instance get method
   *
   * @param resource - the full URI or web page link
   * @param params - the request query params
   */
  customAxiosGet (resource: any, params?: any) {
    const instance = Axios.create();
    return instance.get(resource, {
      params: params
    });
  }

  /**
   * Custom Axios instance post Request
   *
   * @param resource - the full URI or web page url
   * @param data - the request body
   * @param params - the request query params
   */
  customAxiosPost (resource: any, data: any, params?: any) {
    const instance = Axios.create();
    return instance.post(resource, data, {
      params: params
    });
  }
}
