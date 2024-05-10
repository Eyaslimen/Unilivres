import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtelechargerComponent } from './ltelecharger.component';

describe('LtelechargerComponent', () => {
  let component: LtelechargerComponent;
  let fixture: ComponentFixture<LtelechargerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LtelechargerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LtelechargerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
