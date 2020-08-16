//#region Imports
import { Component } from '@angular/core';
import { FooterState } from 'src/app/models/enums/footer-state';
//#endregion


//A classe que representa a página inicial da aplicação.//
@Component({
  selector: 'owl-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})


export class MainPage {

  //#region Constructor
  
  //Constructor padrão// 
  constructor(){}
  
  //#endregion

  //#region Public Properties
  
  //Footer atualmente selecionado.//
  public currentSelectedFooter: FooterState.CATEGORIES;

  //Os estados possíveis para a parra de navegação do footer.//
  public footerState: typeof FooterState = FooterState;
  
  //#endregion

}
