import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWithIssuesComponent } from './page-with-issues.component';

describe('PageWithIssuesComponent', () => {
  let component: PageWithIssuesComponent;
  let fixture: ComponentFixture<PageWithIssuesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageWithIssuesComponent]
    });
    fixture = TestBed.createComponent(PageWithIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
