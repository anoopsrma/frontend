import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class DataService {

  	private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
  	goal = this.goals.asObservable();

  	constructor(private http:HttpClient) {}

  	changeGoal(goal) 
  	{
    	this.goals.next(goal);
  	}

  	// Uses http.get() to load data from a single API endpoint
    getFoods() {
        return this.http.get('https://www.reddit.com/r/worldnews.json');
    }

}