import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestiontabComponent } from './questiontab.component';

describe('QuestiontabComponent', () => {
  let component: QuestiontabComponent;
  let fixture: ComponentFixture<QuestiontabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestiontabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestiontabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
