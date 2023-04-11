import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumpingLettersComponent } from './jumping-letters.component';

describe('JumpingLettersComponent', () => {
  let component: JumpingLettersComponent;
  let fixture: ComponentFixture<JumpingLettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumpingLettersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JumpingLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
