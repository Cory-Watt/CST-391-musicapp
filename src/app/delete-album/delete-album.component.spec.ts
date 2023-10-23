// Importing necessary utilities from Angular's testing module to set up the component's testing environment.
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importing the component to be tested.
import { DeleteAlbumComponent } from './delete-album.component';

// The top-level 'describe' block defines the suite of tests for the DeleteAlbumComponent.
describe('DeleteAlbumComponent', () => {
  // Declaring variables that will hold the instance of the component and the testing environment.
  let component: DeleteAlbumComponent;
  let fixture: ComponentFixture<DeleteAlbumComponent>;

  // The 'beforeEach' is a function that gets executed before each 'it' block in this 'describe' block.
  beforeEach(() => {
    // Setting up the Angular testing environment for this component.
    TestBed.configureTestingModule({
      declarations: [DeleteAlbumComponent] // Declaring the component to be tested.
    });

    // Creating the testing environment for the component, which includes the component instance and its template.
    fixture = TestBed.createComponent(DeleteAlbumComponent);
    // Retrieving the instance of the component.
    component = fixture.componentInstance;
    // Triggering change detection for the component to update any bindings.
    fixture.detectChanges();
  });

  // The 'it' block defines a single test - in this case, checking if the component is created successfully.
  it('should create', () => {
    // The 'expect' function is a function for assertions. Here, it checks that the component instance is truthy (i.e., it exists).
    expect(component).toBeTruthy();
  });
});