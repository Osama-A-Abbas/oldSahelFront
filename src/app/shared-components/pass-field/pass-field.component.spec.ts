import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassFieldComponent } from './pass-field.component';

describe('PassFieldComponent', () => {
  let component: PassFieldComponent;
  let fixture: ComponentFixture<PassFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});