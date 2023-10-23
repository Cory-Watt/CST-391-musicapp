// Importing necessary modules from Angular core testing library
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importing the component to be tested
import { ListArtistsComponent } from './list-artists.component';

// Describe function defines a suite of tests for the 'ListArtistsComponent'
describe('ListArtistsComponent', () => {
  // Declaring variables that will hold the instance of the component and the testing environment
  let component: ListArtistsComponent;
  let fixture: ComponentFixture<ListArtistsComponent>;

  // 'beforeEach' is a function that is called before each 'it' function in a 'describe' suite
  beforeEach(() => {
    // Configures and initializes environment for unit testing and provides methods for creating components and services in unit tests.
    TestBed.configureTestingModule({
      declarations: [ListArtistsComponent] // Declare the component to be tested
    }).compileComponents(); // Compile the components declared in the testing module. This is necessary if using Webpack/TSC to compile HTML and CSS into their component.

    // Create a fixture instance that holds the component and its test environment
    fixture = TestBed.createComponent(ListArtistsComponent);

    // Accessing the component instance from the fixture
    component = fixture.componentInstance;

    // Trigger a change detection cycle for the component
    fixture.detectChanges();
  });

  // 'it' function defines an individual test
  it('should create', () => {
    // 'expect' function checks if the condition meets the expected behavior
    expect(component).toBeTruthy(); // Tests if the component instance is created
  });
});