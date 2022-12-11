import React from "react";
import Card from './components/Card'
class Main extends React.Component {
    state = {
        products: [
            {
                "brand": "Nike",
                "overview": "Jacquard-knit Jumper",
                "price": "30$",
                "image":""
            }
        ]
    }

    render() {
        return (
            <Card products={this.state.products} />
        );
    }
}
export default Main;