import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSeparatorComponent } from './text-separator.component';

describe('TextSeparatorComponent', () => {
  let component: TextSeparatorComponent;
  let fixture: ComponentFixture<TextSeparatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TextSeparatorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
