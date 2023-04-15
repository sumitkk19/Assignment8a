import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppcompComponent } from './appcomp.component';

describe('AppcompComponent', () => {
  let component: AppcompComponent;
  let fixture: ComponentFixture<AppcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
