import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; /*for http services*/
import 'rxjs/add/operator/map'; /*map operator to return obserable*/

@Injectable() /*it's like aurelia injection and binding*/
export class PostServices {
	
	constructor(private http : Http) {

	}

	getPostServices() {
		return this.http.get('https://jsonplaceholder.typicode.com/posts')
			.map(response=> response.json()); /*map will return obserable*/


	}
}