// Standard Angular component imports
import { Component, Input, OnInit } from '@angular/core'; // 'OnInit' should be imported as it's used by the component.

// Model imports for types
import { Album } from '../models/Album';
import { Artist } from '../models/Artist';

// Service import for fetching data
import { MusicServiceService } from '../service/music-service.service';

// Component metadata defined by decorator
@Component({
  selector: 'app-list-albums', // Defines the custom HTML tag as <app-list-albums> for this component.
  templateUrl: './list-albums.component.html', // Link to the external HTML template.
  styleUrls: ['./list-albums.component.css'] // Link to the external CSS style sheet.
})
export class ListAlbumsComponent implements OnInit { // Implements OnInit lifecycle hook.
  @Input() artist: Artist | null = null; // Input property 'artist', expected to be passed from a parent component.
  albums: Album[] = []; // Property to hold the list of albums.
  selectedAlbum: Album | null = null; // Property to hold the currently selected album.

  // Constructor with the music service injected.
  constructor(private service: MusicServiceService) { }

  // Lifecycle hook that is called after data-bound properties are initialized.
  ngOnInit() {
    if (this.artist) { // Check if an artist is provided.
      // Fetch the albums from the service using the artist's name.
      // This assumes 'getAlbums' returns a synchronously available value
      this.albums = this.service.getAlbums(this.artist.Name);
    }
  }

  // Method to handle the event of selecting an album.
  public onSelectAlbum(album: Album) {
    this.selectedAlbum = album; // Assign the clicked album as the selected album.
  }
}