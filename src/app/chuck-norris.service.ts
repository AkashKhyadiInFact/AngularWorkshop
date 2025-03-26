import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisService {

  private httpClient = inject(HttpClient);

  loadJoke() { 
    return this.httpClient.get<Joke>(
      'https://api.chucknorris.io/jokes/random?category=dev'
    );
  }
}

//Strg + alt + x
export interface Joke {
	categories: string[];
	created_at: string;
	icon_url: string;
	id: string;
	updated_at: string;
	url: string;
	value: string;
}