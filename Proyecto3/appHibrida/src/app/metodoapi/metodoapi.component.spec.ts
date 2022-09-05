import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodoapiComponent } from './metodoapi.component';

describe('MetodoapiComponent', () => {
  let component: MetodoapiComponent;
  let fixture: ComponentFixture<MetodoapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetodoapiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetodoapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
