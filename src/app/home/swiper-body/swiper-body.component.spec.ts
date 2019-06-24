import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperBodyComponent } from './swiper-body.component';

describe('SwiperBodyComponent', () => {
  let component: SwiperBodyComponent;
  let fixture: ComponentFixture<SwiperBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwiperBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
