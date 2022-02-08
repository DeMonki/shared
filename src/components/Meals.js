import { useEffect, useState } from 'react';
import axios from 'axios';

const Meals = () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        const fetchMeals = async () => {
            const response = await axios(url);
            setMeals(response.data.categories);
        }
        fetchMeals();
    }, [meals]);

    return (meals.length ?
        meals.map(meal => (
            <div key={meal.idCategory} >
                <h1>{meal.strCategory}</h1>
                <img src={meal.strCategoryThumb} alt={meal.idCategory} width={150} />
                <p>{meal.strCategoryDescription}</p>
            </div>
        )) : null
    )
}

export default Meals;