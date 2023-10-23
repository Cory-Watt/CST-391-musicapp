// Importing necessary modules from Angular core testing library.
// ComponentFixture is used for handling the test environment for the component.
// TestBed is a unit testing tool provided by Angular.
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importing the actual component we will be testing.
import { CreateAlbumComponent } from './create-album.component';

// 'describe' is a function to group a set of similar tests, in this case, for CreateAlbumComponent.
describe('CreateAlbumComponent', () => {
  // Declaring variables that will hold instances of the component and its test fixture.
  let component: CreateAlbumComponent;
  let fixture: ComponentFixture<CreateAlbumComponent>;

  // 'beforeEach' is a function that executes the provided function before each 'it' test is run.
  // We're setting up the testing environment for CreateAlbumComponent here.
  beforeEach(async () => { // Wrapped this function with async because TestBed.configureTestingModule() returns a promise which we should ideally await.
    await TestBed.configureTestingModule({ // Configuring the testing module with the required declarations.
      declarations: [CreateAlbumComponent] // Declaring the component we're testing.
    })
    .compileComponents(); // This method is responsible for compiling the external templates and CSS files into the testing environment.
    
    // Creating a new component fixture for testing.
    fixture = TestBed.createComponent(CreateAlbumComponent);
    // Retrieving the instance of the component from the fixture.
    component = fixture.componentInstance;
    // Triggering change detection for the component.
    fixture.detectChanges();
  });

  // 'it' is another function for running an individual test. 
  // This test checks if the instance of the component is truthy (i.e., it exists).
  it('should create', () => {
    expect(component).toBeTruthy(); // Using Jasmine's expect function to check if the component instance is truthy.
  });
});