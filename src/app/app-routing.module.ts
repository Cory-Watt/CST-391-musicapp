// Importing necessary Angular core modules
import { NgModule } from '@angular/core';
// Importing RouterModule and Routes to enable and configure routing respectively
import { RouterModule, Routes } from '@angular/router';

// Importing components to which the application's paths will be mapped
import { CreateAlbumComponent } from './create-album/create-album.component';
import { DeleteAlbumComponent } from './delete-album/delete-album.component';
import { DisplayAlbumComponent } from './display-album/display-album.component';
import { EditAlbumComponent } from './edit-album/edit-album.component';
import { ListAlbumsComponent } from './list-albums/list-albums.component';
import { ListArtistsComponent } from './list-artists/list-artists.component';

// Defining routes: an array of objects that maps a specific path to a component
const routes: Routes = [
  // Path for creating an album. When '/create' is accessed, CreateAlbumComponent will be rendered
  { path: 'create', component: CreateAlbumComponent },

  // Path for listing artists. When '/list-artists' is accessed, ListArtistsComponent will be rendered
  { path: 'list-artists', component: ListArtistsComponent },

  // Path for listing albums. When '/list-albums' is accessed, ListAlbumsComponent will be rendered
  { path: 'list-albums', component: ListAlbumsComponent },

  // Path for displaying a specific album by its id. When '/display/:id' is accessed, DisplayAlbumComponent will be rendered
  { path: 'display/:id', component: DisplayAlbumComponent },

  // Path for editing a specific album by its artist name and id. When '/edit/:artist/:id' is accessed, EditAlbumComponent will be rendered
  { path: 'edit/:artist/:id', component: EditAlbumComponent },

  // Path for deleting a specific album by its artist name and id. When '/delete/:artist/:id' is accessed, DeleteAlbumComponent will be rendered
  { path: 'delete/:artist/:id', component: DeleteAlbumComponent }
];

// NgModule decorator where the module's metadata is defined
@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configures the router at the application's root level with the given routes
  exports: [RouterModule] // Exporting RouterModule makes router directives available for use in the AppModule components
})
export class AppRoutingModule { } // Class definition for the module