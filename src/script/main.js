import './component/search-bar.js';
import DataSource from './datasource.js';

const main = () => {
    const inputSearch = document.querySelector("search-bar");
    const drinkListItem = document.querySelector('#resultList');

    const onButtonSearchClicked = async () => {
        try{
            const result = await DataSource.searchDrink(inputSearch.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }

        const seeResultScroll = document.getElementById("searchResult");
        seeResultScroll.scrollIntoView();
    };

    const renderResult = results => {
        drinkListItem.innerHTML = "";       
        drinkListItem.innerHTML += `
            <div class="page-header">
                <h1>Result for: <small>${inputSearch.value}</small></h1>
            </div>`;

        results.forEach(drink => {
            const {strDrink, strDrinkThumb, strGlass} = drink;
            const drinkItem = document.createElement("div");
            drinkItem.setAttribute("class", "drink-list");

            drinkItem.innerHTML = `
                <div class="col-sm-6 col-md-4">
                    <div class="thumbnail">
                        <img src="${strDrinkThumb}" alt="thumbnail">                    
                        <div class="caption">
                            <h4>${strDrink}</h4>
                            <p>Best served in the ${strGlass}</p>
                            <p><a href="content.html" class="btn btn-primary" role="button">See more</a></p>
                        </div>
                    </div>
                </div>`;
                
            drinkListItem.appendChild(drinkItem);
        })
    };

    const fallbackResult = message => {
        drinkListItem.innerHTML = "";
        drinkListItem.innerHTML += `
            <div class="page-header">
                <h1>Result for: <small>${message}</small></h1>
            </div>`;
    };

    inputSearch.clickEvent = onButtonSearchClicked;
};

export default main;