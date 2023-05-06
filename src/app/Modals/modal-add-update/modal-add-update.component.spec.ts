import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddUpdateComponent } from './modal-add-update.component';

describe('ModalAddUpdateComponent', () => {
  let component: ModalAddUpdateComponent;
  let fixture: ComponentFixture<ModalAddUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
