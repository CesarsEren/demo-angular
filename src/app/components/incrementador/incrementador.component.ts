import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [],
})
export class IncrementadorComponent implements OnInit {
  /*@Input() leyenda: string = 'leyenda';
  @Input() progreso: number = 50;*/
  @Input('nombre') leyenda = 'leyenda';
  @Input('progreso') progreso: number = 50;

  @Output() cambiovalor: EventEmitter<number> = new EventEmitter();

  @ViewChild('txtprogress') txtprogress: ElementRef;

  constructor() {}
  ngOnInit(): void {}

  onChanges(newValue: number): void {
    if (newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }
    this.txtprogress.nativeElement.value = this.progreso;
    this.cambiovalor.emit(this.progreso);
  }
  cambiarvalor(valor: number): void {
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }
    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + valor;
    this.cambiovalor.emit(this.progreso);
    this.txtprogress.nativeElement.focus();
  }
}
