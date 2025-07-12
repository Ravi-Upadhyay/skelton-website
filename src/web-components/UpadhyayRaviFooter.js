import {LitElement, css, unsafeCSS, html} from 'lit';
import styles from '../styles/main.css?inline';


class UpadhyayRaviFooter extends LitElement {
    static styles = css`
    ${unsafeCSS(styles)}
    `;

    render() {
        return html`
            <footer>
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
                    <span>&copy; ${new Date().getFullYear()} upadhyayravi.com</span>
                    <nav>
                        <a href="/" style="margin-right: 16px; color: inherit; text-decoration: none;">Home</a>
                        <a href="/about" style="margin-right: 16px; color: inherit; text-decoration: none;">About</a>
                        <a href="/contact" style="color: inherit; text-decoration: none;">Contact</a>
                    </nav>
                </div>
            </footer>
        `;
    }
}

export default UpadhyayRaviFooter;