import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) should list investiments', () => {
    let investiments = component.investiments;
    expect(investiments.length).toBe(1);
    expect(investiments[0].name).toContain('itau');
  });

  it('(U) should list investiments', () => {
    let investiments =
      fixture.debugElement.nativeElement.querySelectorAll('.list-itens');
    expect(investiments.length).toBe(1);
    expect(investiments[0].textContent).toContain('itau');
  });
});
