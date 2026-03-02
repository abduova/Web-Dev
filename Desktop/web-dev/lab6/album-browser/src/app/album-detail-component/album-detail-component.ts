import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../service/album-service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-album-detail-component',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './album-detail-component.html',
  styleUrl: './album-detail-component.css',
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  albumTitle = '';
  loading = true;
  error = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.albumService.getAlbum(id).subscribe({
        next: (album) => {
        console.log('Fetched album:', album);
          this.album = album;
          this.albumTitle = album.title;
          this.loading = false;
        },
        error: () => {
          this.error = true;
          this.loading = false;
        }
      });
    } else {
      this.error = true;
      this.loading = false;
    }
  }

  save(): void {
    if (this.album) {
      const updated = { ...this.album, title: this.albumTitle };
      this.albumService.updateAlbum(updated).subscribe({
        next: (album) => {
          this.album = album;
          this.albumTitle = album.title;
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
