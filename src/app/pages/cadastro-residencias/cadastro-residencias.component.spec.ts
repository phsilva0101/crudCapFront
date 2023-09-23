import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroResidenciasComponent } from './cadastro-residencias.component';

describe('CadastroResidenciasComponent', () => {
  let component: CadastroResidenciasComponent;
  let fixture: ComponentFixture<CadastroResidenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroResidenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroResidenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
