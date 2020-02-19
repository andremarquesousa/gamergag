import React from 'react';
import Posts from '../data/recent-posts.json';
import styles from './create-meme.module.css';

class CreateMeme extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.canvas = document.querySelector(`.${styles.canvas}`);
        this.context = this.canvas.getContext('2d');
        this.image = '';
        this.topText = '';
        this.bottomText = '';
        this.fontSize = '28';

        this.canvas.width = this.canvas.width;
        this.canvas.height = this.canvas.height;
        this.canvas.style.width = this.canvas.width;
        this.canvas.style.height = this.canvas.height;
    }

    componentWillMount() {
        this.actions = {
            getImage: (elem) => {
                const reader = new FileReader();

                reader.onload = (event) => {
                    this.image = new Image();

                    this.image.onload = () => {
                        this.context.drawImage(this.image,0,0);
                    }

                    this.image.src = event.target.result;
                }

                reader.readAsDataURL(elem.target.files[0]);
            },
            range: (elem) => {
                const element = elem.target;

                this.fontSize = element.value;
                this.context.font = this.fontSize + 'px Impact';
            },
            write: (elem) => {
                const element = elem.target;

                if (this.image) {
                    this.context.drawImage(this.image,0,0);
                } else {
                    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                }

                this.fontSize = document.querySelector('input[type="range"]').value;

                this.context.font = this.fontSize + 'px Impact';
                this.context.textAlign = 'center';
                this.context.strokeStyle = 'black';
                this.context.lineWidth = 3;
                this.context.fillStyle = 'white';

                if (element.classList.contains(styles.textTop)) {
                    this.topText = element.value;
                }

                if (element.classList.contains(styles.textBottom)) {
                    this.bottomText = element.value;
                }

                this.context.fillText(this.topText, this.canvas.width / 2, 40);
                this.context.strokeText(this.topText, this.canvas.width / 2, 40);

                this.context.fillText(this.bottomText, this.canvas.width / 2, this.canvas.height - 40);
                this.context.strokeText(this.bottomText, this.canvas.width / 2, this.canvas.height - 40);
            },
            save: (elem) => {
                const element = elem.target;
                element.href = this.canvas.toDataURL('image/jpg');
            }
        }
    }

    render() {
        return (
            <main>
                <div className={styles.middle}>
                    <div className={styles.image}>
                        <canvas className={styles.canvas} width="600" height="400"></canvas>
                    </div>

                    <label className={styles.file}>
                        <input type="file" onChange={this.actions.getImage} placeholder="escolha uma foto" />
                    </label>

                    <p className={styles.obs}>600 x 400</p>

                    <div className={styles.memeDetail}>
                        <p>tamanho da fonte</p>
                        <input type="range" onChange={this.actions.range} min="24" max="40" value={this.fontSize} />
                        <p>texto(superior)</p>
                        <input className={styles.textTop} onChange={this.actions.write} onKeyUp={this.actions.write} type="text" />
                        <p>texto(inferior)</p>
                        <input className={styles.textBottom} onChange={this.actions.write} onKeyUp={this.actions.write} type="text" />
                    </div>

                    <a href="#" className={styles.save} onClick={this.actions.save} download="meme.jpg">Salvar</a>
                </div>
            </main>
        )
    }
}

export default CreateMeme;
