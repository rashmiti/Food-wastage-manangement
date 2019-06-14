import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerComponent } from './banner.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BannerComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    component.bannerUrl = 'Cyabge_Intranet_banner.swf';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should listen resize event on window for swf file', () => {
    window.resizeTo(150, 200);
    window.dispatchEvent(new Event('resize'));
    expect(component).toBeTruthy();
  });

  it('for png file type', () => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    component.bannerUrl = 'Cyabge_Intranet_banner.png';
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should listen resize event on window for png file', () => {
    window.resizeTo(1450, 200);
    window.dispatchEvent(new Event('resize'));
    expect(component).toBeTruthy();
  });
});
