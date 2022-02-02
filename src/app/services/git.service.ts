import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  itemsPerPage = 10;

  constructor(private httpClient: HttpClient) { }

  // For github profile

  public getProfile(searchQuery: Observable<any>) {
    let dataURL = `https://api.github.com/users/${searchQuery}`;
    return this.httpClient.get<any>(dataURL).pipe(
      retry(1),
      catchError(this.handleErrors)
    );
  }



  // For github repos
    public getRepos(searchQuery: Observable<any[]>) {
    let dataURL = `https://api.github.com/users/${searchQuery}/repos?page=${1}&per_page=${this.itemsPerPage}`;
    return this.httpClient.get<any[]>(dataURL).pipe(
      retry(1), 
      catchError(this.handleErrors)
    );

  }
   
  // For Pagination
    public getPages(searchQuery: Observable<any[]>, page: Observable<any>) {
    let dataURL = `https://api.github.com/users/${searchQuery}/repos?page=${page}&per_page=${this.itemsPerPage}`;
    return this.httpClient.get<any>(dataURL).pipe(
      retry(1), 
      catchError(this.handleErrors)
    );

  }

  public handleErrors(err: HttpErrorResponse) {
    let errorMessage: string;
    // client side error
    if(err.error instanceof ErrorEvent) {
      errorMessage = `MESSAGE : ${err.error.message}`;
    }
    // server side error
    else {
      errorMessage = `STATUS: ${err.status} MESSAGE: ${err.message}`;
    }
    return throwError(() => errorMessage);
  }
}
