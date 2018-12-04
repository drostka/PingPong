import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Player } from './player';
import { map } from 'rxjs/operators';
 
@Injectable()
 
// Service for player data.
export class PlayerService {

    // We need Http to talk to a remote server.
    constructor(private http : Http){ }
 
    // Retrieve player data from API
    readPlayers(){
        return this.http.get(
            "http://localhost:60352/api/Players"
        ).pipe(map((res: Response) => res.json()));
    }

    // Send player data to remote server to create it.
    createPlayer(player): Observable<Player>{
    
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
    
        return this.http.post(
            "http://localhost:60352/api/Players",
            player,
            options
        ).pipe(map((res: Response) => res.json()));
    }
}