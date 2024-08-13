import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWithoutIssuesComponent } from './page-without-issues.component';

describe('PageWithoutIssuesComponent', () => {
  let component: PageWithoutIssuesComponent;
  let fixture: ComponentFixture<PageWithoutIssuesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageWithoutIssuesComponent]
    });
    fixture = TestBed.createComponent(PageWithoutIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
