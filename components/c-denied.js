import { LitElement, html, css } from "lit";

export class CDenied extends LitElement {

    static styles = [
        css`    
          .box {
            height: 40px;
            padding: 16px;
            font-size: 1.5em;
            font-weight: bold;
            border-radius: 8px;
            }
         .negativeAnswer {
          background-color: crimson;
        text-align: center;
        color: #900c3f;
          }

        `,
      ];

  render() {
    return html` 
       
    <div class="box negativeAnswer">Access denied</div>
    <!-- <slot></slot> -->

     `;
  }
}

customElements.define("c-denied", CDenied);
