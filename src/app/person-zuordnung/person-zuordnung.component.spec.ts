import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonZuordnungComponent } from './person-zuordnung.component';

describe('ZuordnungComponent', () => {
  let component: PersonZuordnungComponent;
  let fixture: ComponentFixture<PersonZuordnungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonZuordnungComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonZuordnungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
