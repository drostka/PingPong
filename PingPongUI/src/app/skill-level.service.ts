import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { SkillLevel } from './skill-Level';
 
@Injectable()
 
// Service for skill level data.
export class skillLevelService {
 
    // We need Http to talk to a remote server.
    constructor(private _http: Http) { }
 
    // Get list of skills from database via api.
    readSkillLevels(): Observable<SkillLevel[]>{
        return this._http
            .get("http://localhost:60352/api/Skills")
            .pipe(map((res: Response) => res.json()));
    }
 
}