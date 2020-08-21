class ContentItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set drink(drink) {
        this._drink = drink;
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
                }

                .content-section {
                    padding-top: 10%;
                }
                
                .content-holder h1 {
                    padding-bottom: 5%;
                }
                
                .content-image {
                    margin-bottom: 5%;
                }
                
                .content-text {
                    padding-top: 5%;
                    line-height: 2em;
                    font-size: 16px;
                }
                
                .content-desc {
                    font-weight: 600;
                    letter-spacing: 0.1em;
                    font-style: oblique;
                    font-size: 16px;
                }
                
                .img-responsive {
                    min-width: 100%;
                }
                
                .content-holder a {
                    background-color: #953902;
                    color: #fff;
                    border: none;
                    border-radius: 0;
                    padding: 15px 40px;
                    display: inline-block;
                    margin-right: auto;
                    margin-left: auto;
                    text-align: center;
                    margin-top: 10%;
                    margin-bottom: 10%;
                    font-size: 14px;
                    transition: all 0.3s ease;
                    -webkit-transition: all 0.3s ease;
                    text-decoration: none;
                }
                
                .content-holder a:hover {
                    background-color: #B35703;
                }
                
                .content-holder a:active {
                    background-color: #B35703 !important;
                }
                
                .content-holder a:focus {
                    background-color: #953902 !important;
                }
            </style>
            <div class="container text-center">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2 content-holder" id="contentHolder">
                        <h1>${this._drink.strDrink}</h1>
                        <img class="img-responsive content-image" id="contentImage" src="${this._drink.strDrinkThumb}">
                        <div class="row">
                            <div class="col-md-8 col-md-offset-2">
                                <p class="content-text">${this._drink.strInstructions}</p>
                                <br>
                                <p class="content-desc">Best served in the ${this._drink.strGlass}</p>
                            </div>
                        </div>                        
                        <a href="index.html" role="button">Back to home</a>
                    </div>   
                </div>
            </div>`;
    }
}

customElements.define("content-item", ContentItem);