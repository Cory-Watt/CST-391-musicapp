// Import necessary testing utilities from Angular's core testing library.
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Import the component that is to be tested.
import { EditAlbumComponent } from './edit-album.component';

// Describe block defines a suite of tests for the 'EditAlbumComponent'.
describe('EditAlbumComponent', () => {
  // Declare variables for the component instance and the testing fixture.
  let component: EditAlbumComponent;
  let fixture: ComponentFixture<EditAlbumComponent>;

  // Set up the test environment before executing each test.
  beforeEach(() => {
    // TestBed is Angular's primary API for configuring and initializing environments for unit testing.
    TestBed.configureTestingModule({
      // declarations array declares the component to the testing module so that it's aware of it.
      declarations: [EditAlbumComponent]
    }).compileComponents(); // compileComponents() is called to compile the component's template and CSS.
    
    // Create a fixture instance, which creates an instance of the component and the test environment.
    fixture = TestBed.createComponent(EditAlbumComponent);
    // Get the instance of the component from the fixture.
    component = fixture.componentInstance;
    // Perform change detection on the component, which binds data in the component with the template.
    fixture.detectChanges();
  });

  // it block defines an individual test. 
  // This test checks if the component is correctly instantiated.
  it('should create', () => {
    // expect checks the actual output against the expected output.
    // toBeTruthy() asserts that the component instance should be a truthy value (i.e., it exists/it's created successfully).
    expect(component).toBeTruthy();
  });
});
