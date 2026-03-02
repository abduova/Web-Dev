import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AlbumService } from '../service/album-service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-albums-component',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums-component.html',
  styleUrl: './albums-component.css',
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.fetchAlbums();
  }

  fetchAlbums(): void {
    this.albumService.getAlbums().subscribe({
      next: (albums) => {
        console.log('Fetched albums:', albums);
        this.albums = albums;
      },
      error: () => {
        this.albums = [];
      }
    });
  }

  delete(id: number): void {
    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.albums = this.albums.filter(album => album.id !== id);
      }
    });
  }
}
