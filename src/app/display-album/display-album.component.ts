// Import necessary decorators and functionality from the Angular core library.
import { Component, Input } from '@angular/core';
// Import the Album model, which defines the structure of an album object.
import { Album } from '../models/Album';

// The @Component decorator that tells Angular that the class right below is a component.
// It provides metadata about the component, including its selector, templateUrl, and styleUrls.
@Component({
  selector: 'app-display-album', // The selector is the custom HTML tag that will be used to insert this component into other components or HTML files.
  templateUrl: './display-album.component.html', // The location of the component's template file. It contains the HTML to be rendered for this component.
  styleUrls: ['./display-album.component.css'] // The location of the component's styles. Specific CSS for this component.
})
export class DisplayAlbumComponent { // This class name can be used to reference the component in other parts of the application.
  
  // The @Input() decorator marks the property as an input property, 
  // which allows data to be passed into this child component from the parent component where it's used.
  // Here it's expected to receive an Album object or null.
  // It's initialized as null, meaning that until an actual Album object is passed, it won't hold any information.
  @Input() album: Album | null = null;
}