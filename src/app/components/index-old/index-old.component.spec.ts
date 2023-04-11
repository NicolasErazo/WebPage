import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexOldComponent } from './index-old.component';

describe('IndexOldComponent', () => {
  let component: IndexOldComponent;
  let fixture: ComponentFixture<IndexOldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexOldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
