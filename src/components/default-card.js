import React from 'react';
import { Link } from 'react-router-dom';
import styles from './default-card.module.css';

class DefaultCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { item, index } = this.props;

        return (
            <div className={styles.defaultCard} key={index}>
                <span className={styles.user}><Link to={`/user/${item.user}`}>{item.user}</Link></span>
                <h3 className={styles.title}><Link to={`/post/${item.titleId}`}>{item.title}</Link></h3>
                <div className={styles.box}>
                    <div className={styles.media}>
                        <img src={item.media} alt={item.title} />
                    </div>
                    <div className={styles.interaction}>
                        <ul>
                            <li className={styles.like}><button type="button" title="Gostei" key="gostei">Gostei</button></li>
                            <li className={styles.unlike}><button type="button" title="Não gostei" key="nao-gostei">Não gostei</button></li>
                            <li className={styles.facebook}><button type="button" title="Facebook" key="facebook">Facebook</button></li>
                        </ul>
                    </div>
                </div>
                <ul className={styles.info}>
                    <li><a href="">Comentários ({item.numberComments})</a></li>
                    <li><a href="">Boa! ({item.likes})</a></li>
                </ul>
            </div>
        )
    }
}

export default DefaultCard;
