import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CategoriesService {

    welcomeDatas = 'http://localhost:4200/assets/welcomeDatas.json';
    getDatas: any[];

    constructor(private http: HttpClient) { }

    getAllProducts() {
        // return this.http.get(this.welcomeDatas).pipe(
        //     map( res => res)
        // );

        return new Promise ((resolve, reject) => {
            this.http.get(this.welcomeDatas).subscribe(
                (response: any[]) => {
                    this.getDatas = response;
                    resolve(this.getDatas);
                },
                (error) => reject(error)
            );
        });
    }
}
