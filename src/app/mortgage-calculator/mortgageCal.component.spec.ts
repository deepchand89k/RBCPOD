import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MortgageCalComponent } from "./mortgageCal.component";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe("MortgageCalComponent", () => {
  let component: MortgageCalComponent;
  let fixture: ComponentFixture<MortgageCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [MortgageCalComponent],
      imports: [
        FormsModule
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
