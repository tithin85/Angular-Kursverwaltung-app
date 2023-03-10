import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { PersonDetailsComponent } from './person-details.component';
import { PersonStorageService } from '../_services/person-storage.service';
import { ZuordnungService } from '../_services/zuordnung.service';

describe('PersonDetailsComponent', () => {
  let component: PersonDetailsComponent;
  let fixture: ComponentFixture<PersonDetailsComponent>;
  let personStorageServiceSpy: jasmine.SpyObj<PersonStorageService>;
  let zuordnungServiceSpy: jasmine.SpyObj<ZuordnungService>;
  let location: Location;

  beforeEach(async () => {
    const personStorageServiceMock = jasmine.createSpyObj('PersonStorageService', ['getPersonDetailEntity']);
    const zuordnungServiceMock = jasmine.createSpyObj('ZuordnungService', ['fromperson']);

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PersonDetailsComponent],
      providers: [
        { provide: PersonStorageService, useValue: personStorageServiceMock },
        { provide: ZuordnungService, useValue: zuordnungServiceMock },
      ],
    }).compileComponents();

    personStorageServiceSpy = TestBed.inject(PersonStorageService) as jasmine.SpyObj<PersonStorageService>;
    zuordnungServiceSpy = TestBed.inject(ZuordnungService) as jasmine.SpyObj<ZuordnungService>;
    location = TestBed.inject(Location);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonDetailsComponent);
    component = fixture.componentInstance;
    personStorageServiceSpy.getPersonDetailEntity.and.returnValue({ id: 1, name: 'John Doe' });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show person detail', () => {
    const nameEl = fixture.nativeElement.querySelector('.person-name');
    expect(nameEl.textContent).toContain('John Doe');
  });

  it('should go back when back button is clicked', () => {
    spyOn(location, 'back');
    const backButtonEl = fixture.nativeElement.querySelector('.back-button');
    backButtonEl.click();
    expect(location.back).toHaveBeenCalled();
  });

  // it('should navigate to "zuordnung/person/:id" when fromperson button is clicked', () => {
  //   const frompersonButtonEl = fixture.nativeElement.querySelector('.fromperson-button');
  //   frompersonButtonEl.click();
  //   expect(zuordnungServiceSpy.fromperson).toHaveBeenCalledWith(1);
  // });
});
