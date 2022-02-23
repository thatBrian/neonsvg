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
    const [width, setWidth] = useState(0);
    const [fontSize, setFontSize] = useState(8);
    const download = () => {
        domtoimage.toPng(document.getElementById(styles.neonText)).then((dataUrl) => {
            var link = document.createElement('a');
            link.download = 'neonText.png';
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
                Width:
                <input onChange={(e) => setWidth(e.target.value)} value={width} />
                Font Size:
                <input onChange={(e) => setFontSize(e.target.value)} value={fontSize} />
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
                        width: parseInt(width) === 0 || !width ? 'auto' : `${width}px`,
                        overflow: 'hidden',
                        fontSize: `${fontSize}rem`,
                    }}
                >
                    {text}
                </div>
            </div>
        </div>
    );
}
