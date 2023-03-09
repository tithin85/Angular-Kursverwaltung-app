import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZuordnungKursComponent } from './zuordnung-kurs.component';

describe('ZuordnungKursComponent', () => {
  let component: ZuordnungKursComponent;
  let fixture: ComponentFixture<ZuordnungKursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZuordnungKursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZuordnungKursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
