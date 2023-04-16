import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UzersComponent } from './uzers.component';

describe('UzersComponent', () => {
  let component: UzersComponent;
  let fixture: ComponentFixture<UzersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UzersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UzersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
