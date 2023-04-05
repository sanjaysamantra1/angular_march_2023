import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormClsComponent } from './template-driven-form-cls.component';

describe('TemplateDrivenFormClsComponent', () => {
  let component: TemplateDrivenFormClsComponent;
  let fixture: ComponentFixture<TemplateDrivenFormClsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenFormClsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenFormClsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
