import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { ProductLine } from 'src/app/interfaces/ProductLine';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProductsLinesService {

  url = 'https://localhost:44370/Api/Productlines';

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
  
  getProductLines(): Observable<ProductLine[]>{
    return this.http.get<ProductLine[]>(this.url)
      .pipe(
        map(results => {
          console.log('getProductLine', results);
          return results
        }),
        tap(product => console.log('fetched ProductLine')),
        catchError(this.handleError)
        );
  }

  getProductLineById(productLine: string): Observable<ProductLine[]>{
      return this.http.get<ProductLine[]>(`${this.url}?id=${productLine}`)
        .pipe(
          map(results => {
            console.log('getProductLineById', results);
            return results
          }),
          tap(product => console.log(`fetched getProductLineById ${this.url}?id=${productLine}`)),
          catchError(this.handleError)
          );
    }

    createProductLine(productLine: ProductLine) {
      var data = JSON.stringify(productLine);
      this.http.post(this.url,data,httpOptions).subscribe(data =>{
        console.log(data);
      },error => {
        catchError(this.handleError)
      });
    }

    deleteProductLine(productLine: ProductLine){
      this.http.delete(`${this.url}?id=${productLine.productLine1}`).subscribe(data =>{
        console.log(data);
      },error => {
        catchError(this.handleError)
      });
    }

    updateProductLine(productLine: ProductLine) {
      var data = JSON.stringify(productLine);
      this.http.put(`${this.url}?id=${productLine.productLine1}`,data,httpOptions).subscribe(data =>{
        console.log(data);
      },error => {
        catchError(this.handleError)
      });
    }
}
