import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptsService {

  constructor() { }

  index() {
  let script = document.createElement("script");
  script.src = "./assets/js/index.js";
  let body = document.getElementsByTagName("body")[0];
  body.appendChild(script);

}

}
