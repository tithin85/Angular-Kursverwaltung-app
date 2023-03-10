import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonZuordnungComponent } from './person-zuordnung.component';
import { RouterTestingModule } from '@angular/router/testing';
import { KursStorageService } from '../_services/kurs-storage.service';
import { PersonStorageService } from '../_services/person-storage.service';
import { ZuordnungService } from '../_services/zuordnung.service';
import { Location } from '@angular/common';
import { of } from 'rxjs';
import { Kurs } from '../_shared/Kurs';
import { Person } from '../_shared/Person';

describe('PersonZuordnungComponent', () => {
  let component: PersonZuordnungComponent;
  let fixture: ComponentFixture<PersonZuordnungComponent>;
  let kursStorageService: KursStorageService;
  let personStorageService: PersonStorageService;
  let zuordnungService: ZuordnungService;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonZuordnungComponent ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        KursStorageService,
        PersonStorageService,
        ZuordnungService,
        Location
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonZuordnungComponent);
    component = fixture.componentInstance;
    kursStorageService = TestBed.inject(KursStorageService);
    personStorageService = TestBed.inject(PersonStorageService);
    zuordnungService = TestBed.inject(ZuordnungService);
    location = TestBed.inject(Location);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get person detail entity on init', () => {
    const personDetail: Person = {id: 1, name: 'John Doe'};
    spyOn(personStorageService, 'getPersonDetailEntity').and.returnValue(personDetail);

    component.ngOnInit();

    expect(component.personZuordnung).toEqual(personDetail);
  });

  it('should get remaining kurs list on init', () => {
    const remainingKurse: Kurs[] = [{id: 1, name: 'Kurs 1'}, {id: 2, name: 'Kurs 2'}];
    spyOn(zuordnungService, 'getRemainingKurs').and.returnValue(of(remainingKurse));

    component.ngOnInit();

    expect(component.remainingKursList).toEqual(remainingKurse);
  });

  // Add more tests for other methods and functionality
});
