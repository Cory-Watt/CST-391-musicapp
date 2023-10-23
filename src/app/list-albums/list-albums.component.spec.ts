// Import necessary Angular testing utilities.
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Import the component that is going to be tested.
import { ListAlbumsComponent } from './list-albums.component';

// 'describe' is a Jasmine function that declares a suite of tests. 
// This one is for the 'ListAlbumsComponent'.
describe('ListAlbumsComponent', () => {
  // Declare variables for the component instance and its testing fixture.
  let component: ListAlbumsComponent;
  let fixture: ComponentFixture<ListAlbumsComponent>;

  // 'beforeEach' is a function that sets up the testing environment 
  // before each 'it' test block is executed.
  beforeEach(() => {
    // 'TestBed' is Angular's primary API for testing. 
    // 'configureTestingModule' configures the testing module with the given object.
    // Here, it declares the component to be tested.
    TestBed.configureTestingModule({
      declarations: [ListAlbumsComponent] // Declare the component to be tested.
    });
    
    // 'createComponent' creates an instance of the component, returning a fixture.
    fixture = TestBed.createComponent(ListAlbumsComponent);
    
    // Access the test instance of the component via the fixture.
    component = fixture.componentInstance;
    
    // 'detectChanges' performs change detection on the component, 
    // essential for binding updates and for triggering lifecycle hooks like 'ngOnInit'.
    fixture.detectChanges();
  });

  // 'it' declares a test case (spec) that is executed. 
  // This test checks whether the component instance is created successfully.
  it('should create', () => {
    // 'expect' is a function that checks if the condition meets the expected value.
    // 'toBeTruthy' asserts that the variable is not false, undefined, null, 0, or empty.
    expect(component).toBeTruthy(); // Asserts that the component is created successfully.
  });
});