import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdupdateComponent } from './mdupdate.component';

describe('MdupdateComponent', () => {
  let component: MdupdateComponent;
  let fixture: ComponentFixture<MdupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
