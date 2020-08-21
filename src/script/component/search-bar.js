class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#inputSearch").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
            .search-container {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            
            .search-container .search-item {
                position: relative;
                vertical-align: middle;
                z-index: 2;
            }
            
            .search-container .search-item input {
                width: 100%;
                min-width: 600px;
                height: 64px;
                line-height: 64px;
                border: none;
                background: rgba(255, 255, 255, 0.5);
                font-size: 24px;
                padding: 5px 5px 5px 40px;
                color: #953902;
                position: relative;
                border-radius: 0;
            }
            
            input:focus,
            input:active {
                outline: 1px solid #953902;
            }
            
            .search-container .search-item button {
                position: absolute;
                top: 4px;
                right: 4px;
                color: white;
                background: #953902;
                font-size: 24px;
                height: 56px;
                line-height: 56px;
                width: auto;
                padding: 0 10px;
                border: 0;
            }
            
            button:focus,
            button:active {
                outline: 4px solid #953902;
            }

            a {
                display: block;
                width: 100%;
                heigh: 100%;
            }
            
            @media (max-width: 768px) {
                .search-container .search-item input {
                    min-width: 400px;
                    height: 56px;
                    line-height: 56px;
                    font-size: 16px;
                    padding: 5px 5px 5px 20px;
                }
            
                .search-container .search-item button {
                    font-size: 16px;
                    height: 48px;
                    line-height: 48px;
                    width: auto;
                }
            }
            
            @media (max-width: 480px) {
                .search-container .search-item input {
                    min-width: 280px;
                    height: 48px;
                    line-height: 48px;
                    font-size: 14px;
                }
            
                .search-container .search-item button {
                    font-size: 14px;
                    height: 40px;
                    line-height: 40px;
                    width: auto;
                }
            }
            </style>
            <div class="search-container" id="searchContainer">
                <div class="search-item" id="searchItem">
                    <input type="search" placeholder="Search 'Mojito' or even 'herbal'" id="inputSearch">
                    <button type="submit" id="inputSearchButton">Search</button>
                </div>
            </div>`;
        
        this.shadowDOM.querySelector("#inputSearchButton").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);