import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(@Inject('baseUrl') private baseUrl: string, private http: HttpClient) { }

  private buildUrl(path?: string, id?: string | number, fullUrl: boolean = false): string {

    if (!path) {
      const baseOnly = this.baseUrl.replace(/\/$/, '');
      return (id !== undefined && id !== null) ? `${baseOnly}/${id}` : baseOnly;
    }

    if (fullUrl) {
      const trimmed = path.replace(/\/$/, '');
      return (id !== undefined && id !== null) ? `${trimmed}/${id}` : trimmed;
    }

    const base = this.baseUrl.replace(/\/$/, '');
    const p = path.replace(/^\//, '').replace(/\/$/, '');

    const url = `${base}/${p}`;
    return (id !== undefined && id !== null) ? `${url}/${id}` : url;
  }

  private buildOptions(params?: Record<string, any>, headers?: HttpHeaders): { params?: HttpParams; headers?: HttpHeaders } {
    const options: { params?: HttpParams; headers?: HttpHeaders } = {};

    if (params) {
      options.params = new HttpParams({ fromObject: params });
    }

    if (headers) {
      options.headers = headers;
    }

    return options;
  }

  get<T>(path: string, id?: string | number, fullUrl?: boolean, params?: Record<string, any>, headers?: HttpHeaders): Observable<T> {
    return this.http.get<T>(this.buildUrl(path, id, fullUrl), this.buildOptions(params, headers));
  }

  post<TRequest, TResponse = any>(path: string, body: TRequest, id?: string | number, fullUrl?: boolean, params?: Record<string, any>, headers?: HttpHeaders): Observable<TResponse> {
    return this.http.post<TResponse>(this.buildUrl(path, id, fullUrl), body, this.buildOptions(params, headers));
  }

  put<TRequest, TResponse = any>(path: string, body: TRequest, id?: string | number, fullUrl?: boolean, params?: Record<string, any>, headers?: HttpHeaders): Observable<TResponse> {
    return this.http.put<TResponse>(this.buildUrl(path, id, fullUrl), body, this.buildOptions(params, headers));
  }

  delete<T>(path: string, id?: string | number, fullUrl?: boolean, params?: Record<string, any>, headers?: HttpHeaders): Observable<T> {
    return this.http.delete<T>(this.buildUrl(path, id, fullUrl), this.buildOptions(params, headers));
  }

  patch<TRequest, TResponse = any>(path: string, body: Partial<TRequest>, id?: string | number, fullUrl?: boolean, params?: Record<string, any>, headers?: HttpHeaders): Observable<TResponse> {
    return this.http.patch<TResponse>(this.buildUrl(path, id, fullUrl), body, this.buildOptions(params, headers));
  }
}
