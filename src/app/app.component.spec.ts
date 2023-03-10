/*import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'online Kursverwaltung'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('online Kursverwaltung');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('online Kursverwaltung app is running!');
  });
});*/
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent ', () => {
  let component:  AppComponent;
  let fixture: ComponentFixture< AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  AppComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it ('should have a title and false isLoodgedIn, showAdminBoard, showModeratorBoard and username', () => {
    expect(component.title).toEqual('online Kursverwaltung');
    expect(component.isLoggedIn).toEqual(false);
    expect(component.showAdminBoard).toEqual(false);
    expect(component.showModeratorBoard).toEqual(false);
    expect(component.username).toEqual('admin')

  });

  /*it('should toggle the status', () => {
    component.toggle();
    expect(component.status).toEqual(true);
  });*/
});

