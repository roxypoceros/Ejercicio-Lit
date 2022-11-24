import { LitElement, html, css } from "lit";
import { btnStylesModule } from "../css/btn-style";
import "./c-welcome.js";

export class CForm extends LitElement {
  static get properties() {
    return {
      adult: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.name = "";
    this.birthDate = "";
  }

  static styles = [
    btnStylesModule,
    css`
      :host {
        display: block;
        font-family: "Martel", serif;
        background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
        width: 500px;
        padding: 24px;
        text-align: center;
        --BurgundyColor: #900c3f;
      }
      h1 {
        //background-color: #c6c6e9;
        background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
        color: #862d86;
        border-bottom: 3px solid #862d86;
      }
      label{
        font-weight: bold;
      }
      .inputLabels {
        color: #862d86;
      }

      input[type="text"] {
        width: 80%;
        padding: 8px 16px;
        margin: 8px 0;
        box-sizing: border-box;
        font-family: "Martel", serif;
        border: none;
        background-color: #ffffff8f;
        border-radius: 4px;
      }

      input[type="date"] {
        width: 40%;
        padding: 8px 16px;
        margin: 8px 0;
        box-sizing: border-box;
        font-family: "Martel", serif;
        border: none;
        background-color: #ffffff8f;
        border-radius: 4px;
        color: #862d86;
      }

      ::placeholder {
        color: #ad8bad;
      }

       .box {
        height: 40px;
        padding: 16px;
        font-size: 1.5em;
        font-weight: bold;
        border-radius: 8px;

      }

      .positiveAnswer {
        background-color: green;
        text-align: center;
        color: white;
      }

      .negativeAnswer {
        background-color: crimson;
        text-align: center;
        //color: #900c3f;
        color: var(--BurgundyColor);
      } 
    `,
  ];

  render() {
    return html`
      <div>
        <h1>Formulario</h1>
        <div>
          <label class="inputLabels" for="name">Nombre:</label>
          <input type="text" id="name" placeholder="Escribe tu nombre" />
          <br />
          <label class="inputLabels" for="name">Fecha de nacimiento:</label>
          <input
            type="date"
            id="birthDate"
            value="aaaa-mm-dd"
            min="1927-01-01"
          />
        </div>
        <button class="btn-style" @click=${this.validateAccess}>
        <h2>Consultar</h2>
        </button>
      </div>


 <!--   -->
   
   ${this.adult
        ? html` <div class="box positiveAnswer">Welcome </div>`
        : html` <div class="box negativeAnswer">Access denied</div>`} 


 
 <c-welcome>
  ¡Bienvenidoooo! 
 </c-welcome>
    `;

    
  }

  get inputName() {
    return this.renderRoot?.querySelector("#name") ?? null;
  }

  get inputDate() {
    return this.renderRoot?.querySelector("#birthDate") ?? null;
  }

  validateAccess(e) {
    if (this.inputName.value != "" && this.inputDate.value) {
      let age = this.validateAge(this.inputDate.value);
      this.adult = age >= 18 ? true : false;
      console.log(this.adult);
    }
  }

  validateAge(birth) {
    let currentDate = new Date();
    let birthday = new Date(birth);
    let timeResult =
      (currentDate.getTime() - birthday.getTime()) / 1000 / (3600 * 24);

    return Math.abs(Math.round(timeResult / 365.25));
  }
}
customElements.define("c-form", CForm);
