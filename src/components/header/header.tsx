import { Component, h } from "@stencil/core";

@Component({
    tag: 'pa-header',
    styleUrl: './header.css',
})

export class Header {
    private menu: IMenu[] = [
        { name: 'Home'},
        { name: 'About'},
        { name: 'Clients'},
        { name: 'Contacts'}
    ]

    render() {
        return (
            <header>
                <h1 class="brand-name">StencilCart</h1>
                <nav>
                    <ul>
                        {this.menu.map(item => <li><a href="">{item.name}</a></li>)}
                    </ul>
                </nav>
            </header>
        )
    }
}

interface IMenu {
    name: string;
}
