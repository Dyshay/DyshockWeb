import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertissementComponent } from './advertissement.component';

describe('AdvertissementComponent', () => {
  let component: AdvertissementComponent;
  let fixture: ComponentFixture<AdvertissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvertissementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvertissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
