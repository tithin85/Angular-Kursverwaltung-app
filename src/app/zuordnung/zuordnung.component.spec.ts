import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZuordnungComponent } from './zuordnung.component';

describe('ZuordnungComponent', () => {
  let component: ZuordnungComponent;
  let fixture: ComponentFixture<ZuordnungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZuordnungComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZuordnungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
