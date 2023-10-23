// Import necessary modules from Angular's testing library.
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Import the component that is being tested.
import { DisplayAlbumComponent } from './display-album.component';

// 'describe' creates a block that groups together several related tests in one "suite" of tests for the DisplayAlbumComponent.
describe('DisplayAlbumComponent', () => {
  // Declare variables for the component instance and the fixture.
  let component: DisplayAlbumComponent;
  let fixture: ComponentFixture<DisplayAlbumComponent>;

  // Set up the test environment before each test.
  beforeEach(async () => { // Made it an async function since TestBed.configureTestingModule can return a Promise.
    // Wait for the TestBed to initialize the components.
    await TestBed.configureTestingModule({
      declarations: [DisplayAlbumComponent] // Declare the test component.
    })
    .compileComponents(); // Compile the component's template and CSS.
  });

  // Before each test, create a new instance of the component and its fixture.
  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAlbumComponent); // Create a component fixture.
    component = fixture.componentInstance; // Get the instance of the component from the fixture.
    fixture.detectChanges(); // Trigger a change detection cycle for the component.
  });

  // Define an individual test. The 'it' function should read like a sentence in specs.
  it('should create', () => {
    // Expectation: the component instance should be truthy (i.e., it exists or is successfully created).
    expect(component).toBeTruthy();
  });
});