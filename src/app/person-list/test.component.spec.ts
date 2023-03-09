import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonListComponent } from './person-list.component';

describe('PersonListComponent', () => {
  let component: PersonListComponent;
  let fixture: ComponentFixture<PersonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a list of persons', () => {
    component.persons = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ];
    fixture.detectChanges();
    const elements = fixture.nativeElement.querySelectorAll('.person-item');
    expect(elements.length).toBe(2);
    expect(elements[0].textContent).toContain('Alice');
    expect(elements[1].textContent).toContain('Bob');
  });

  it('should emit an event when a person is clicked', () => {
    spyOn(component.personClicked, 'emit');
    const button = fixture.nativeElement.querySelector('.person-item button');
    button.click();
    expect(component.personClicked.emit).toHaveBeenCalledWith(1);
  });
});
