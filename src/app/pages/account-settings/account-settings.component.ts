import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [],
})
export class AccountSettingsComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private _document,
    private _ajustes: SettingsService
  ) {
    this.colorCheck();
  }

  ngOnInit(): void {
    this.colorCheck();
  }

  changeTheme(link: any, tema: string): void {
    this.aplicarCheck(link);
    this._ajustes.aplicarTema(tema);
  }

  aplicarCheck(link: any): void {
    const selectores: any = this._document.getElementsByClassName('selector');

    for (const ref of selectores) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  colorCheck(): void {
    const selectores: any = this._document.getElementsByClassName('selector');
    const tema = this._ajustes.ajustes.tema;
    console.log(tema);
    for (const ref of selectores) {
      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;
      }
    }
  }
}
