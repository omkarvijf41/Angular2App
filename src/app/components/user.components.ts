import { Component } from '@angular/core';
import { PostServices} from '../services/post.services';
@Component({
	moduleId: module.id,
	selector: 'user',
	templateUrl: `user.components.html`, // multiline template literals display text in new line without br tag.
  	providers: [PostServices] //postService return response
})
export class UserComponent {
	// since it's type script we need to give datatype. typescript converts .ts files to .js when compiling//
	name: string;
	email: string;
	address: address; // for objects datatype is interface keyword with object name and individual properties defines with respective datatypes//
	intrests: string[]; // array creation
	showIntrest: boolean; //boolean type
	posts: posts[];//response array object
	constructor(private postServices : PostServices) {
		this.name = 'Omkar';
		this.email = 'atluri.omkar@gmail.com';
		this.address = {
			street: '999 main',
			city: 'windsor',
			state: 'CT',
			Country: 'USA'
		};
		this.intrests = ['TDP', 'NBK', 'JOKING'];
		this.showIntrest = false;
		this.postServices.getPostServices().subscribe(posts=> {
			this.posts = posts
		});// we need to subscribe to http service map return obserable
	} 

	toggleIntrest() {
		if (this.showIntrest) {
			this.showIntrest=false;
		} else {
			this.showIntrest=true;
		}
	}

	addIntrests(intrest) {
		this.intrests.push(intrest);
	}

	deleteIntrests(i) {
		this.intrests.splice(i,1);
	}
}

interface address {
	street: string;
	city: string;
	state: string;
	Country: string;
}

interface posts {
	userId: number;
	id: number;
	title: string;
	body: string;
}