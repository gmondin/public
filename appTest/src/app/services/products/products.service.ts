import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Product } from 'src/app/interfaces/product';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = 'https://localhost:44370/Api/Products';

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
  
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url)
      .pipe(
        map(results => {
          console.log('getProducts', results);
          return results
        }),
        tap(product => console.log('fetched products')),
        catchError(this.handleError)
        );
  }

  getProductById(productCode: string): Observable<Product[]>{
      return this.http.get<Product[]>(`${this.url}?productCode=${productCode}`)
        .pipe(
          map(results => {
            console.log('getProductById', results);
            return results
          }),
          tap(product => console.log(`fetched getProductById ${this.url}?productCode=${productCode}`)),
          catchError(this.handleError)
          );
    }

    getProductByName(productName: string): Observable<Product[]>{
      return this.http.get<Product[]>(`${this.url}?productName=${productName}`)
        .pipe(
          map(results => {
            console.log('getProductByName', results);
            return results
          }),
          tap(product => console.log(`fetched getProductByName ${this.url}?productName=${productName}`)),
          catchError(this.handleError)
          );
    }

    getProductByLine(productLine: string): Observable<Product[]>{
      return this.http.get<Product[]>(`${this.url}?productLine=${productLine}`)
        .pipe(
          map(results => {
            console.log('getProductByLine', results);
            return results
          }),
          tap(product => console.log(`fetched getProductByLine ${this.url}?productLine=${productLine}`)),
          catchError(this.handleError)
          );
    }

    createProduct(product: Product) {
      var data = JSON.stringify(product);
      this.http.post(this.url,data,httpOptions).subscribe(data =>{
        console.log(data);
      },error => {
        catchError(this.handleError)
      });
    }

    deleteProduct(product: Product){
      this.http.delete(`${this.url}?productCode=${product.productCode}`).subscribe(data =>{
        console.log(data);
      },error => {
        catchError(this.handleError)
      });
    }

    updateProduct(product: Product) {
      var data = JSON.stringify(product);
      this.http.put(`${this.url}?productCode=${product.productCode}`,data,httpOptions).subscribe(data =>{
        console.log(data);
      },error => {
        catchError(this.handleError)
      });
    }
}
