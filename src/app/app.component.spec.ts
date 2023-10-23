// Importing the TestBed utility from Angular core testing library, which helps to create a dynamic test module that mimics an Angular @NgModule
import { TestBed } from '@angular/core/testing';
// Importing RouterTestingModule for testing components that use the router like AppComponent
import { RouterTestingModule } from '@angular/router/testing';
// Importing the main application component that needs to be tested
import { AppComponent } from './app.component';

// describe function defines a suite of tests for a specific test case, in this case, 'AppComponent'
describe('AppComponent', () => {
  // beforeEach is a setup function that runs before each 'it' test case within this 'describe' block
  beforeEach(() => TestBed.configureTestingModule({
    // Setting up the testing module by importing necessary modules and declaring components involved
    imports: [RouterTestingModule], // RouterTestingModule is used for router testing
    declarations: [AppComponent] // Declaring AppComponent as it's the subject of these test cases
  }));

  // Individual test case that checks if the application has been created successfully
  it('should create the app', () => {
    // Creating a test component fixture which is a wrapper for a component and its template
    const fixture = TestBed.createComponent(AppComponent);
    // Retrieving the component instance from the fixture
    const app = fixture.componentInstance;
    // Expectation checks if the component instance is truthy (i.e., it exists or is successfully created)
    expect(app).toBeTruthy();
  });

  // Test case that checks if the component's title property is 'musicapp'
  it(`should have as title 'musicapp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // Expectation compares the title property of the component instance to the string 'musicapp'
    expect(app.title).toEqual('musicapp');
  });

  // Test case that checks if the rendered template contains the correct title
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    // Trigger a change detection cycle for the component
    fixture.detectChanges();
    // Getting the native HTML element of the component's template
    const compiled = fixture.nativeElement as HTMLElement;
    // Expectation checks if the compiled HTML contains a certain piece of text
    expect(compiled.querySelector('.content span')?.textContent).toContain('musicapp app is running!');
  });
});