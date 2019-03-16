import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateparcelleComponent } from './updateparcelle.component';

describe('UpdateparcelleComponent', () => {
  let component: UpdateparcelleComponent;
  let fixture: ComponentFixture<UpdateparcelleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateparcelleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateparcelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
