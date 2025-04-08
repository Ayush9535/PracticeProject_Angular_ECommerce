import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandmadeSectionComponent } from './handmade-section.component';

describe('HandmadeSectionComponent', () => {
  let component: HandmadeSectionComponent;
  let fixture: ComponentFixture<HandmadeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandmadeSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HandmadeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
