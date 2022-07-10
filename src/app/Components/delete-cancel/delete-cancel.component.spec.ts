import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCancelComponent } from './delete-cancel.component';

describe('DeleteCancelComponent', () => {
  let component: DeleteCancelComponent;
  let fixture: ComponentFixture<DeleteCancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCancelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
