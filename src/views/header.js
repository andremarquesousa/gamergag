import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {
        return (
            <header>
                <div class="middle clear">
                    <h1><a href="home">GamerGag</a></h1>

                    <nav>
                        <ul>
                            <li><a href="register">Cadastro</a></li>
                            <li><a href="create-meme">Criar meme</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header;
