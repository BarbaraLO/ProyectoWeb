import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioUsuarioComponent } from './formulario-usuario.component';

describe('FormularioUsuarioComponent', () => {
  let component: FormularioUsuarioComponent;
  let fixture: ComponentFixture<FormularioUsuarioComponent>;

  (document).ready(function() {
    ("#basic-form").validate();
  });
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
