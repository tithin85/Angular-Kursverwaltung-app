import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonFormularComponent } from './person-formular.component';

describe('PersonFormularComponent', () => {
  let component: PersonFormularComponent;
  let fixture: ComponentFixture<PersonFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonFormularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
