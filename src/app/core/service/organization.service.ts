import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Organization } from '../model/organization.model';
import { Page } from '../model/page.model';
import { httpOptions } from '../util/util';

@Injectable({
    providedIn: 'any'
})
export class OrganizationService {

    url: string = environment.API_URL;

    constructor(private http: HttpClient) { }


    findAllOrganizations(page?: number, size?: number, search?: string): Observable<Page<Organization>> {
        let options = httpOptions({ page, size, search });
        return this.http.get<Page<Organization>>(`${this.url}/organization`, options);
    }

    findById(id: number): Observable<Organization> {
        return this.http.get<Organization>(`${this.url}/organization${id}`);
    }


    save(organization: Organization): Observable<Organization> {
        return this.http.post<Organization>(`${this.url}/organization`, organization);
    }



    deleteById(id: number): Observable<any> {
        return this.http.delete(`${this.url}/organization${id}`);
    }
}