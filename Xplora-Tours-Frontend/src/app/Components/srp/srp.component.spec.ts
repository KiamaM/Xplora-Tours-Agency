import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SRPComponent } from './srp.component';

describe('SRPComponent', () => {
  let component: SRPComponent;
  let fixture: ComponentFixture<SRPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SRPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SRPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
