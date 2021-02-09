import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDetailsComponent } from './cadastro-details.component';

describe('CadastroDetailsComponent', () => {
  let component: CadastroDetailsComponent;
  let fixture: ComponentFixture<CadastroDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
