import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { PersonFormComponent } from './person-form.component';

describe('PersonFormComponent', () => {
  let component: PersonFormComponent;
  let fixture: ComponentFixture<PersonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonFormComponent],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {

    fixture = TestBed.createComponent(PersonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should save when the save button is clicked', () => {
    spyOn(component.personSaved, 'emit');
    component.person = { id: 1, name: 'Alice' };
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.personSaved.emit).toHaveBeenCalledWith({ id: 1, name: 'Alice' });
  });

  it('should not emit a save event if the form is invalid', () => {
    spyOn(component.personSaved, 'emit');
    component.person = { id: 1, name: '' };
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.personSaved.emit).not.toHaveBeenCalled();
  });
});
