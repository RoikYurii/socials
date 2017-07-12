import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class GalleryService {

  constructor( private _http: Http ) { }

  getAlbums(id) {
    return this._http.get('https://jsonplaceholder.typicode.com/albums?userId=' + id);
  };

  getPhotos(id){
    return this._http.get('https://jsonplaceholder.typicode.com/photos?albumId=' + id);
  };

};
