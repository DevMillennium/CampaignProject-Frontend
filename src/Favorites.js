import React from 'react';
import Card from './components/Card'
class Favorites extends React.Component {
    state = {
        products: [
            {
                "brand": "Nike",
                "overview": "Jacquard-knit Jumper",
                "price": "$30",
                "image": ""
            },
            {
                "brand": "Adidas",
                "overview": "Jacquard-knit Jumper",
                "price": "$27",
                "image": ""
            },
            {
                "brand": "Apple",
                "overview": "Macbook Air M2 Chip",
                "price": "$1,199",
                "image": ""
            },
            {
                "brand": "Apple",
                "overview": "Macbook Air M1 Chip",
                "price": "$999",
                "image": ""
            }

        ]
    }
    render() {
        return (
            <div className='row ' >
                <h1>Favoriler</h1>
                <div className='lg-12'>
                    <Card products={this.state.products} />
                </div>
            </div>

        )
    }
}
export default Favorites;
