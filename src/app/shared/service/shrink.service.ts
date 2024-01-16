import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShrinkService {

  private apiUrl: string = 'http://localhost:5000/urls';
  constructor(private http: HttpClient) { }

  public shrinkUrl(url: string): Observable<ShrinkResponse> {
    const data: ShrinkRequest = {
      originalUrl: url
    }
    return this.http.post<ShrinkResponse>(this.apiUrl, data);
  }
}

export type ShrinkRequest = {
  originalUrl: string
}

export type ShrinkResponse = {
  shortenUrl: string
}
