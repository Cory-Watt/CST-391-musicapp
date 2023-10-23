// Importing core functionality from Angular Core
import { Component } from '@angular/core';
// Importing Router from Angular Router to enable navigation between views
import { Router } from '@angular/router';

// Component decorator that specifies the Angular metadata for the AppComponent
@Component({
  selector: 'app-root', // The component's CSS element selector in HTML templates
  templateUrl: './app.component.html', // The location of the component's template file
  styleUrls: ['./app.component.css'] // The location of the component's private CSS styles
})
export class AppComponent {
  title = 'My Music Collection'; // Public property to hold the title, used in the component's template
  version = "1.0"; // Public property to hold the current version of the app

  // Injecting the router service into the component through the constructor
  constructor(private router: Router) {

  }

  // Method to display an alert with the current version of the app
  public displayVersion() {
    alert(" Version: " + this.version);
  }

  // Method to navigate to the list-artists route and display an alert
  public displayArtistList() {
    // Navigating to the 'list-artists' route with query parameters
    this.router.navigate(['list-artists'], { queryParams: { data: new Date() } });
    alert("Display list here"); // This alert is shown after navigation
  }
}