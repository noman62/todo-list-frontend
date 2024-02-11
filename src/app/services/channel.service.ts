import { Injectable } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChannelService {
  private apiUrl = 'http://localhost:8000/api/';
  constructor(private http: HttpClient) {}

  addProduct(productData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}addProduct`, productData);
  }

  getAllProducts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}allProduct`);
  }

  deleteProduct(productId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}delete/${productId}`);
  }

  updateProduct(productId: string, productData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}update/${productId}`, productData);
  }

  getSingleProduct(productId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}product/${productId}`);
  }

  deleteMultipleProducts(productIds: number[]): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}deleteProducts`, {
      ids: productIds,
    });
  }
}
