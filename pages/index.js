import { useState } from 'react';
import styles from '../styles/Home.module.css';
import domtoimage from 'dom-to-image-more';

export default function Home() {
    const [text, setText] = useState('Sing!');
    const [fill, setFill] = useState('#ffffff');
    const [stroke, setStroke] = useState('#ffd600');
    const [background, setBackground] = useState('#000000');
    const [strokeWidth, setStrokeWidth] = useState(2);
    const [glow, setGlow] = useState('#ffd600');
    const download = () => {
        domtoimage.toSvg(document.getElementById(styles.neonText)).then((dataUrl) => {
            var link = document.createElement('a');
            link.download = 'neonText.svg';
            link.href = dataUrl;
            link.click();
        });
    };
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                Text:
                <input onChange={(e) => setText(e.target.value)} value={text} />
                Fill Color:
                <input onChange={(e) => setFill(e.target.value)} value={fill} />
                Outline Color:
                <input onChange={(e) => setStroke(e.target.value)} value={stroke} />
                Outline Width:
                <input onChange={(e) => setStrokeWidth(e.target.value)} value={strokeWidth} />
                Glow Color:
                <input onChange={(e) => setGlow(e.target.value)} value={glow} />
                Background Color:
                <input onChange={(e) => setBackground(e.target.value)} value={background} />
                <br />
                <button onClick={download}>Download</button>
            </div>
            <div className={styles.right} style={{ backgroundColor: background }}>
                <div
                    id={styles.neonText}
                    style={{
                        color: fill,
                        ['--stroke-color']: stroke,
                        ['--neonStrokeWidth']: `${strokeWidth}px`,
                        ['--glowColor']: `${glow}`,
                    }}
                >
                    {text}
                </div>
            </div>
        </div>
    );
}
