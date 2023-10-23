// Importing necessary Angular core components
import { Component } from '@angular/core';
// Importing ActivatedRoute to access route parameters
import { ActivatedRoute } from '@angular/router';
// Importing Artist model
import { Artist } from '../models/Artist';
// Importing music service
import { MusicServiceService } from '../service/music-service.service';

// Component Decorator defining the selector, template URL, and style URLs
@Component({
  selector: 'app-list-artists', // The component's CSS element selector
  templateUrl: './list-artists.component.html', // The location of the component's template file
  styleUrls: ['./list-artists.component.css'] // The location of the component's private CSS styles
})
export class ListArtistsComponent {
  selectedArtist: Artist | null = null; // Property to hold the currently selected artist
  artists: Artist[] = []; // Property to hold the list of artists

  // Constructor to inject ActivatedRoute and MusicServiceService into the component
  constructor(private route: ActivatedRoute, private service: MusicServiceService) { }

  // Lifecycle hook that is called after data-bound properties are initialized
  ngOnInit() {
    // Subscribing to query parameters observable from the activated route
    this.route.queryParams.subscribe(params => {
      console.log("Getting data...."); // Logging to console for debugging
      this.artists = this.service.getArtists(); // Fetching the list of artists from the service
      this.selectedArtist = null; // Resetting the selected artist
    });
  }

  // Method to handle the event of selecting an artist
  onSelectArtist(artist: Artist) {
    this.selectedArtist = artist; // Assigning the selected artist to the corresponding property
  }
}