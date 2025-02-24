import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeathActsComponent } from './heath-acts.component';

describe('HeathActsComponent', () => {
  let component: HeathActsComponent;
  let fixture: ComponentFixture<HeathActsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeathActsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeathActsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
