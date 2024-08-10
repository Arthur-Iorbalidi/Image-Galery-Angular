import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export enum Options {
  search = '/search/photos',
}

export interface IGetProps {
  option: Options,
  query: string,
}

export interface IData {
  total: number,
  total_pages: number,
  results: IImg[],
}

export interface IImg {
  id: string,
  slug: string,
  description: string,
  urls: {
      raw: string,
      full: string,
      regular: string,
      small: string,
      thumb: string,
      small_s3: string,
  }
}

@Injectable({
  providedIn: 'root'
})
export class ImgAPIService {
  private http = inject(HttpClient);
  private baseUrl = 'https://api.unsplash.com';
  private key = 'VxlfJhGqZp_q8IUTwj5kS7i0rppc4i2AHgpGQKNf3Hw';
  private imgsPerPage = 30;
  private orientation = 'landscape';

  public get(props: IGetProps) {
    return this.http.get<IData>(`${this.baseUrl}${props.option}?orientation=${this.orientation}&per_page=${this.imgsPerPage}&query=${props.query}&client_id=${this.key}`  )
}
}
