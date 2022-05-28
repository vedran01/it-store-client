import { HttpParams } from '@angular/common/http';

export function httpParams(object: any): HttpParams | null {

    let httpParams = new HttpParams();

    Object.keys(object).forEach(k => {
        httpParams = httpParams.set(k, object[k]);
    });

    return httpParams.keys.length > 0 ? httpParams : null;
} 


export function httpOptions(object: any): {} {
    const params = httpParams(object);
    return params ? {params} : {};

}