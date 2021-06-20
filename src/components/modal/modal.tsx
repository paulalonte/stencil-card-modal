import { Component, h, State, Listen } from "@stencil/core";
import { CardData } from "../card/card";

@Component({
    tag: 'pa-modal',
    styleUrl: './modal.css',
    shadow: true
})

export class Modal {
    modalEl: HTMLElement;

    @State() cardData: CardData;

    @Listen('cardViewSelected', { target: 'body'})
    onCardSelectedView(event: CustomEvent) {
        if(event.detail) {
            this.cardData = event.detail;
            this.show();
        }
    }

    show() {
        this.modalEl.classList.remove('hide');
        this.modalEl.classList.add('show');
    }

    hide() {
        this.modalEl.classList.remove('show');
        this.modalEl.classList.add('hide');
        this.cardData = {
            name: '',
            imageUrl: '',
            price: '',
            description: ''
        }
    }

    disconnectedCallback(): void {
        console.log('did unload');
    }

    renderModal() {
        return <div class="modal-group">
                    <div class="image-container">
                        <img src={this.cardData.imageUrl} alt="" />
                    </div>
                    <div class="content">
                        <h2 class="label">{this.cardData.name}</h2>
                        <hr />
                        <p class="desc">{this.cardData.description}</p>
                        <p class="price">{this.cardData.price}</p>
                    </div>
                </div>
    }

    render() {
        return (
            <div class="modal hide" ref={el => this.modalEl = el} onClick={() => this.hide()}>
                {
                    this.cardData? this.renderModal() : null
                }
            </div>
        )
    }
}