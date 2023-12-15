import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteamAccountComponent } from './steam-account.component';

describe('SteamAccountComponent', () => {
  let component: SteamAccountComponent;
  let fixture: ComponentFixture<SteamAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SteamAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SteamAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
