import { Component, h, Prop, State, Event, EventEmitter } from "@stencil/core";

@Component({
    tag: 'pa-card',
    styleUrl: './card.css',
    shadow: true,
})

export class Card {
    /**
     * @prop -- card data prop (passed as JSON string to be parsed)
     */
    @Prop() cardData: string;

    /**
     * @state -- card parsed data based from the card data prop to be used by the component
     */
    @State() cardParsedData: CardData;

    /**
     * custom event to emit value 
     * @returns card object
     */
    @Event({ bubbles: true, composed: true }) cardViewSelected: EventEmitter<CardData>;

    componentWillLoad() {
        this.cardParsedData = JSON.parse(this.cardData);
    }

    onCardViewSelected(cardValue: CardData) {
        this.cardViewSelected.emit(cardValue);
    }
    
    render() {
        return (
            <div class="card">
                <div class="image-holder">
                    <img src={this.cardParsedData.imageUrl} alt="image shoe" />
                </div>
                <h3 class="label">{this.cardParsedData.name}</h3>
                <p>{this.cardParsedData.price}</p>
                <button class="view-button" onClick={() => this.onCardViewSelected(this.cardParsedData)}>View Details</button>
            </div>
        )
    }
}

export interface CardData {
    imageUrl: string,
    name: string,
    description: string,
    price: string
}