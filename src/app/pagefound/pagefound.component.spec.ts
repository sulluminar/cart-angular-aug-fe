import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagefoundComponent } from './pagefound.component';

describe('PagefoundComponent', () => {
  let component: PagefoundComponent;
  let fixture: ComponentFixture<PagefoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagefoundComponent]
    });
    fixture = TestBed.createComponent(PagefoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
