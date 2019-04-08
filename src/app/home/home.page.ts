import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  /**
   * Puede ser antinatural para el usuario poner fechas diferentes a las actuales.
   * Es fácil convertir fechas de backend a la zona horaria del usuario.
   * A veces no es posible decirle a pickers de fecha que usen una fecha sin tener en cuenta la zona horaria.
   * Mucho menos indicarle la zona horaria actual para features como marcar la fecha actual con otro color.
   */
  inputDateStr = '2019-03-20';
  inputDate = this.inputDateStr;
  outputDateStr = '2019-03-20';

  onInputChange(e) {
    this.inputDate = new Date(this.inputDateStr).toISOString();
    console.log('UPDATED DATE');
  }
  onDatetimeChange(e) {
    this.outputDateStr = new Date(this.inputDate).toISOString();
    console.log('UPDATED STRING');
  }
}
