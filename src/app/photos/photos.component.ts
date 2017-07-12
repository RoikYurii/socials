import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router"
import { Location } from '@angular/common'

import { GalleryService } from "../_services/gallery.service"

@Component({
  selector: 'photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.sass']
})
export class PhotosComponent implements OnInit {

photos;

  constructor(private _galleryService: GalleryService,
              private _activatedRoute: ActivatedRoute,
              private _location: Location) { }

  ngOnInit() {
    this._activatedRoute.params.forEach((params: Params) => {
      let userId = +params["albumId"];
      this.getPhotos(userId);

    });
  }

  getPhotos(userId) {
    this._galleryService.getPhotos(userId)
      .subscribe( res => {
        this.photos = res.json();
      })
   };

  goBack() {
    this._location.back();
 }

}
