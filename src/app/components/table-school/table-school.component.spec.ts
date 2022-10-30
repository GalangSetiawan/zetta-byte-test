import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSchoolComponent } from './table-school.component';

describe('TableSchoolComponent', () => {
  let component: TableSchoolComponent;
  let fixture: ComponentFixture<TableSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSchoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
