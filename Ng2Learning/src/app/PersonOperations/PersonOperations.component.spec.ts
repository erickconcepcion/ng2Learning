/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PersonOperationsComponent } from './PersonOperations.component';

describe('PersonOperationsComponent', () => {
  let component: PersonOperationsComponent;
  let fixture: ComponentFixture<PersonOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});