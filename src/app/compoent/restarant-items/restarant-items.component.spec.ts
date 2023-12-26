import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestarantItemsComponent } from './restarant-items.component';

describe('RestarantItemsComponent', () => {
  let component: RestarantItemsComponent;
  let fixture: ComponentFixture<RestarantItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestarantItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestarantItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
