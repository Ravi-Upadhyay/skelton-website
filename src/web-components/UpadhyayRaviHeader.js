import {LitElement, css, unsafeCSS, html} from 'lit';
import styles from '../styles/main.css?inline';

class UpadhyayRaviHeader extends LitElement {
    static styles = css`
    ${unsafeCSS(styles)}
    `;

    render() {
        return html`
            <header>
                <nav>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/projects">Projects</a>
                    <a href="/contact">Contact</a>
                </nav>
            </header>
        `;
    }
}

export default UpadhyayRaviHeader;