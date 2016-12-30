import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET, AppState } from './reducers';
import { Observable } from "rxjs/Rx";
import { Borough } from "./borough";
import { environment } from "../environments/environment";
import { RtdbService } from "./rtdb/rtdb.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  boroughs: Observable<Borough[]>;
  public config: Object;

  // todo I don't know at this point how to get around passing rtdbservice in the constructor
  // I would like to just instantiate this guy by his lonesome somehow
  
  constructor(private store: Store<AppState>, private rtdb: RtdbService){
    this.boroughs = store.select(s => s.boroughs);
    this.config = environment.config;
  }

}
