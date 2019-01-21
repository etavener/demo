import { async, ComponentFixture, TestBed, } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProgressDisplayComponent } from './progress-display.component';

describe('ProgressDisplayComponent', () => {
  let component: ProgressDisplayComponent;
  let fixture: ComponentFixture<ProgressDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressDisplayComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the component', () => {
    expect(fixture).toMatchSnapshot();
  });
});
