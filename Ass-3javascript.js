
// Question no -1 

class restaurantManager{
    restaurantList = [{     //1 = restaurantList
        id: 1,
        restaurantName: 'KFC',
        address: 'chakan',
        city: 'pune'
    },
    {
        id: 1,
        restaurantName: 'Domino',
        address: 'pimpri',
        city: 'nasik'
    },
    {
        id: 1,
        restaurantName: 'Monginos',
        address: 'aundh',
        city: 'Mumbai'
    },
    {
        id: 1,
        restaurantName: 'Choclate-Biclate',
        address: 'Dehu',
        city: 'solapur'
    },
    {
        id: 1,
        restaurantName: 'cakies',
        address: 'Aalandi',
        city: 'Latur'
    }];

    printAllRestaurantNames = () =>{    //2 = printAllRestaurantsNames
        return this.restaurantList.map(restaurant => restaurant.restaurantName);
    }

    filterRestaurantsByCity = (cityname) => {   //3  =  filterRestaurantsByCity
        return this.restaurantList.filter(restaurant => restaurant.city==cityname);
    }
}

const restaurantObject = new restaurantManager();

const output1 = restaurantObject.printAllRestaurantNames();
console.log(output1);

console.log(restaurantObject.filterRestaurantsByCity("pune"));


// Question no -2 

orderData = {
    'Below 500':20,
    '500-1000':29,
    '1000-1500':30,
    '1500-2000':44,
    'Above 2000':76
};

// a)

const total = Object.values(orderData).reduce((prev , next) => prev + next);
console.log(total);

// b)

const headers = Object.keys(orderData);
console.log(headers);

// c)

let arr = [];
const response =  headers.map((item , index) => {
    const obj = {
        'id': index+1,
        'order': item,
        'order percenage': ((orderData[item]/total)*100).toFixed(2), //formula = (20/199)*100
        'restaurant': 'Punjabi Tadka'
    }
    arr.push(obj);
})
console.log(arr);

