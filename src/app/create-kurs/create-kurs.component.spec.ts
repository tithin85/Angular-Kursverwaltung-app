import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateKursComponent } from './create-kurs.component';

describe('CreateKursComponent', () => {
  let component: CreateKursComponent;
  let fixture: ComponentFixture<CreateKursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateKursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateKursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
