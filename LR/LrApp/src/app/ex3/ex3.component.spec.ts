/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ex3Component } from './ex3.component';

describe('Ex3Component', () => {
  let component: Ex3Component;
  let fixture: ComponentFixture<Ex3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
