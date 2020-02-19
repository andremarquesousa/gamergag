import React from 'react';
import Posts from '../data/recent-posts.json';
import Card from '../components/default-card';
import styles from './home.module.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <main>
                <div class="middle">
                    <div className={styles.contentPage}>
                        <div className={styles.listPost}>
                            {Posts.map((post, index) =>
                                <Card item={post} key={index} />
                            )}
                        </div>

                        <button className={`${styles.loadMore} default-button`} type="button" name="Carregar mais">Carregar mais</button>
                    </div>
                    <aside className={styles.sidebar}>
                        userss
                    </aside>
                </div>
            </main>
        )
    }
}

export default Home;
