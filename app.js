const searchMeals = async () => {
    const searchText = document.getElementById('search-field').value || '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    // load data
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayMeals(data.meals);
    } catch (error) {
        displayError('No result found', error);
    }


}
searchMeals();

const displayMeals = meals => {
    const mealContainer = document.querySelector('#meal-container .row');
    mealContainer.innerHTML = '';
    meals.forEach((meal) => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'col-md-4 my-2';
        mealDiv.innerHTML = `
            <div class="card shadow mb-5 bg-white custom-rounded" data-bs-toggle="modal" data-bs-target="#foodDetails-${meal.strMeal}">
                <img class="card-img-top" src= "${meal.strMealThumb}">
                     <div class="card-body">
                    <h5 class="text-center meal-name">${meal.strMeal}</h5>
                    </div>
            </div>
            <div class="modal fade" id="foodDetails-${meal.strMeal}" tabindex="-1" aria-labelledby="foodDetails-${meal.strMeal}Label" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="foodDetails-${meal.strMeal}Label">${meal.strMeal}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <img src=${meal.strMealThumb} class=img-thumbnail my-4">
                            <h4 class="text-center mx-3">Ingredients</h4>
                            <ul>
                                <li>${meal["strIngredient1"] || '-'}</li>
                                <li>${meal["strIngredient2"] || '-'}</li>
                                <li>${meal["strIngredient3"] || '-'}</li>
                                <li>${meal["strIngredient4"] || '-'}</li>
                                <li>${meal["strIngredient5"] || '-'}</li>
                                <li>${meal["strIngredient6"] || '-'}</li>
                                <li>${meal["strIngredient7"] || '-'}</li>
                                <li>${meal["strIngredient8"] || '-'}</li>
                                <li>${meal["strIngredient9"] || '-'}</li>
                                <li>${meal["strIngredient10"] || '-'}</li>
                            </ul>
                            
                            <h4 class="text-center">How to Prepare for meal</h4>
                            <div>${meal.strInstructions}</div>
                        </div>
                    </div>
                </div>
            </div>
        
        `
        mealContainer.appendChild(mealDiv);
    })
}

const displayError = message => {
    const errorMsg = document.getElementById('error');
    error.innerHTML = `<div class="text-danger text-center"><h1>${message}</h1></div>`;
}

//  <a class="btn btn-success btn-sm" data-toggle="modal" href="#modal-add_item-<%=list.r_id%>">Add
//                   Menus</a>