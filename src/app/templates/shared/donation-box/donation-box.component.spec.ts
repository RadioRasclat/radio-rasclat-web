import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationBoxComponent } from './donation-box.component';

describe('DonationBoxComponent', () => {
  let component: DonationBoxComponent;
  let fixture: ComponentFixture<DonationBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonationBoxComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
