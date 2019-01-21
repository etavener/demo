import { async, ComponentFixture, TestBed, } from '@angular/core/testing';
import { SuccessContainer } from './success.container';
import { SuccessModule } from './success.module';

describe('Success container', () => {
  let component: SuccessContainer;
  let fixture: ComponentFixture<SuccessContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        SuccessModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the component', () => {
    expect(fixture).toMatchSnapshot();
  });
});
