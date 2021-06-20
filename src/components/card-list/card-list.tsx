import { Component, h, getAssetPath } from "@stencil/core";
import { CardData }  from '../card/card';

@Component({
    tag: 'pa-card-list',
    styleUrl: './card-list.css',
    shadow: true,
    assetsDirs: ['assets']
})

export class CardList {
    
    cardData: CardData[] = [
        {
            imageUrl: getAssetPath('./assets/products/shoe.jpg'),
            name: 'Shoe',
            price: '20.00',
            description: 'This is my shoe'
        },
        {
            imageUrl: getAssetPath('./assets/products/bag.jpg'),
            name: 'Bag',
            price: '30.00',
            description: 'This is my bag'
        },
        {
            imageUrl: getAssetPath('./assets/products/shoe.jpg'),
            name: 'Another Shoe',
            price: '20.00',
            description: 'Another shoe'
        },
        {
            imageUrl: getAssetPath('./assets/products/bag.jpg'),
            name: 'Another Bag',
            price: '124.00',
            description: 'This is my bag'
        },
        {
            imageUrl: getAssetPath('./assets/products/shoe.jpg'),
            name: 'Third Shoe',
            price: '890.00',
            description: 'Another shoe'
        },
        {
            imageUrl: getAssetPath('./assets/products/bag.jpg'),
            name: 'Final Bag',
            price: '350.00',
            description: 'This is my bag'
        }
    ]
    
    render() {
        return (
            <div class="card-list">
                {
                    this.cardData.map(card => <pa-card card-data={JSON.stringify(card)}></pa-card>)
                }
                
            </div>
        )
    }
}
