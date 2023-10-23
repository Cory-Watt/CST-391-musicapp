// Standard Angular imports for creating components and handling dependency injection.
import { Component, OnInit } from '@angular/core';
// Importing custom classes for Album and Track.
import { Album } from '../models/Album';
import { Track } from '../models/Track';
// Importing the music service used for creating an album.
import { MusicServiceService } from '../service/music-service.service';

// Decorator that marks a class as an Angular component and provides configuration metadata.
@Component({
  selector: 'app-create-album', // The component's CSS element selector in HTML.
  templateUrl: './create-album.component.html', // The location of the component's template file.
  styleUrls: ['./create-album.component.css'], // The location of the component's private CSS styles.
})
export class CreateAlbumComponent implements OnInit { // The component class, implementing OnInit for lifecycle hook initialization.
  album: Album = new Album(Math.floor(Math.random() * 1000000), '', '', '', 0, '', []); // Initializing a new album instance.
  tracksRaw: string = ''; // Raw string to hold tracks data from a text input, possibly.
  wasSubmitted: boolean = false; // Flag to check if the form was submitted.

  // Injecting the music service into the component.
  constructor(private service: MusicServiceService) { }

  // Lifecycle hook that is called after data-bound properties of a directive are initialized.
  ngOnInit() { }

  // Method that gets called when the form is submitted.
  public onSubmit() {
    const tracks: Track[] = this.parseTracks(this.tracksRaw); // Parsing raw track data to an array of Track objects.
    this.album.Tracks = tracks; // Assigning the parsed tracks to the album.
    const status = this.service.createAlbum(this.album); // Calling the service method to create a new album and storing its status.
    console.log('The return from createAlbum() was ' + status); // Logging the status of the album creation.
    this.wasSubmitted = true; // Setting the flag to true as the form is submitted.
  }

  // Method to parse raw track data (string) into an array of Track objects.
  private parseTracks(rawTracks: string): Track[] {
    const tracks: Track[] = []; // Array to hold the parsed Track objects.
    const lines = rawTracks.split('\n'); // Splitting the raw data by new lines to process each track.

    // Iterating over each line and creating a Track object from it.
    lines.forEach((line, index) => {
      const [title, lyrics, video] = line.split(':'); // Assuming the format of each track is "title:lyrics:video".
      tracks.push(new Track(Math.floor(Math.random() * 1000000), index + 1, title, lyrics || '', video || '')); // Creating a new Track object and adding it to the array.
    });

    return tracks; // Returning the array of Track objects.
  }
}