import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

class Header extends React.Component {
    render() {
        return (
            <header className={styles.header}>
                <div className="middle">
                    <h1 className={styles.logo}><Link to="/">GamerGag</Link></h1>

                    <nav className={styles.menu}>
                        <ul>
                            <li className={styles.itemMenu}><Link to="/register">Cadastro</Link></li>
                            <li className={styles.itemMenu}><Link to="/create-meme">Criar meme</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header;
