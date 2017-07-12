import { Component, OnInit } from '@angular/core';

import { GalleryService } from '../_services/gallery.service'
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent implements OnInit {

  albums;

  constructor( private _galleryService: GalleryService,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this._activatedRoute.params.forEach((params: Params) => {
      let userId = +params["userId"];
      this.getAlbums(userId);
    });

  }

  getAlbums(userId) {
    this._galleryService.getAlbums(userId)
      .subscribe( res => {
        this.albums = res.json();
      } )
  };

}
