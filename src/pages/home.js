import React from 'react';
import Posts from '../data/recent-posts.json';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <main>
                <div class="middle clear">
                    <div class="content-page">
                        <div className="list-post">
                            <ul>
                            {Posts.map((post, index) =>
                                <li className="default-card" key={index}>
                                    <span className="user"><a href="">{post.user}</a></span>
                                    <h3><a href="">{post.title}</a></h3>
                                    <div className="box">
                                        <div className="media">
                                            <img src={post.media} alt={post.title} />
                                        </div>
                                        <div className="interaction">
                                            <ul>
                                                <li className="like"><button type="button" title="Gostei" key="gostei">Gostei</button></li>
                                                <li className="unlike"><button type="button" title="Não gostei" key="nao-gostei">Não gostei</button></li>
                                                <li className="facebook"><button type="button" title="Facebook" key="facebook">Facebook</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <ul className="info">
                                        <li><a href="">Comentários ({post.numberComments})</a></li>
                                        <li><a href="">Boa! ({post.likes})</a></li>
                                    </ul>
                                </li>
                            )}
                            </ul>

                            <button className="load-more default-button" type="button" name="Carregar mais">Carregar mais</button>
                        </div>
                    </div>
                    <aside class="sidebar">
                        userss
                    </aside>
                </div>
            </main>
        )
    }
}

export default Home;
