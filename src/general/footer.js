import React from 'react';
import styles from './footer.module.css';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div class={`middle ${styles.middle}`}>
                    <p>© Copyright 2018 GamerGag</p>
                </div>
            </footer>
        )
    }
}

export default Footer;
