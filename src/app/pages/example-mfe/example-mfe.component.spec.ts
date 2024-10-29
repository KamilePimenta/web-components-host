import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleMfeComponent } from './example-mfe.component';

describe('ExampleMfeComponent', () => {
  let component: ExampleMfeComponent;
  let fixture: ComponentFixture<ExampleMfeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleMfeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleMfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
