class HeaderBar extends HTMLElement {

    constructor () {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
           * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
           }

            :host {
                display: block;
                width: 100%;
                z-index: 3;
                position: relative;
            }

            .header-bar {
                width: 100%;
                text-align: center;
                padding: 24px;
                position: absolute;
            }

            .animated {
                -webkit-animation-duration: 1s;
                animation-duration: 1s;
                -webkit-animation-fill-mode: both;
                animation-fill-mode: both;
            }

            @-webkit-keyframes fadeInDown {
                0% {
                    opacity: 0;
                    -webkit-transform: translate3d(0, -100%, 0);
                    transform: translate3d(0, -100%, 0);
                }

                100% {
                    opacity: 1;
                    -webkit-transform: none;
                    transform: none;
                }
              }
              
              @keyframes fadeInDown {
                0% {
                    opacity: 0;
                    -webkit-transform: translate3d(0, -100%, 0);
                    transform: translate3d(0, -100%, 0);
                }
              
                100% {
                    opacity: 1;
                    -webkit-transform: none;
                    transform: none;
                }
              }
              
            .fadeInDown {
                -webkit-animation-name: fadeInDown;
                animation-name: fadeInDown;
            }
            
            .header-bar img {
                width: 120px;
            }

       </style>
       <div class="header-bar animated fadeInDown" id="headerBar">    
             <div class="container">
                <img src="src/images/logo.png" alt="logo">
            </div>
        </div>`;
    }    
}

customElements.define("header-bar", HeaderBar);