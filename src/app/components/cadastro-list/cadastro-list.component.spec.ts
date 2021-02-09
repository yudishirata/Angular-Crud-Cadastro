import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroListComponent } from './cadastro-list.component';

describe('CadastroListComponent', () => {
  let component: CadastroListComponent;
  let fixture: ComponentFixture<CadastroListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
