import { Component, OnInit } from '@angular/core';


export interface Photo {
  descripcion: string;
  tiempo: string;
  url: string;
}

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
