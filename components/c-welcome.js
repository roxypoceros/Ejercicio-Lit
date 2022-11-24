import { LitElement, html, css } from "lit-element";

export class CWelcome extends LitElement {

    static styles = [
        css`    
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

        `,
      ];

  render() {
    return html` 
       
    <!--<div class="box positiveAnswer">Welcome</div>-->
    <slot></slot>

     `;
  }
}

customElements.define("c-welcome", CWelcome);
