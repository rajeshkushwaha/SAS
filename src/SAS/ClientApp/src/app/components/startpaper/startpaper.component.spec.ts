import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartpaperComponent } from './startpaper.component';

describe('StartpaperComponent', () => {
  let component: StartpaperComponent;
  let fixture: ComponentFixture<StartpaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartpaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
