import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Rx";
import * as io from "socket.io-client";
import {Store} from "@ngrx/store";
import {RECEIVE_BOROUGHS, AppState} from "../reducers";
import { Borough } from '../borough';

@Injectable()
export class RtdbService {

    private socket: SocketIOClient.Socket;

    private url: string = "https://rtdb.rheosoft.com";

    constructor(private http: Http, private store: Store<AppState>) {

        console.log("rtdbservice started!!");

        this.socket = io(this.url);

        this.socket.on("connect", () => {

            this.socket.emit("subscribe", [{
                view: "90e40254-d57c-4ce5-88b5-20034c9511ec",
                //      ,ticket: response.json()
            }]);

        });

        this.socket.on("90e40254-d57c-4ce5-88b5-20034c9511ec",
            (data) => {
                console.log("dispatching...");
           this.store.dispatch({
                        type: RECEIVE_BOROUGHS,
                        payload: {boroughs: data.map((i) => new Borough(i[0], i[1].fvTotal, i[1].count))}
                    }
                );
            });
    }
}
