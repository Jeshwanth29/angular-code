import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MRegistrationComponent } from './m-registration.component';

describe('MRegistrationComponent', () => {
  let component: MRegistrationComponent;
  let fixture: ComponentFixture<MRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
