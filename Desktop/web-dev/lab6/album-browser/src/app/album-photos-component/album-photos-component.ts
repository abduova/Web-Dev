import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../service/album-service';
import { Photo } from '../models/photo.model';

@Component({
  selector: 'app-album-photos-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos-component.html',
  styleUrl: './album-photos-component.css',
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  loading = true;
  albumId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.albumId) {
      this.albumService.getAlbumPhotos(this.albumId).subscribe({
        next: (photos) => {
          this.photos = photos;
          this.loading = false;
        },
        error: () => {
          this.photos = [];
          this.loading = false;
        }
      });
    } else {
      this.photos = [];
      this.loading = false;
    }
  }

  goBack(): void {
    if (this.albumId) {
      this.router.navigate(['/albums', this.albumId]);
    } else {
      this.router.navigate(['/albums']);
    }
  }
}
