import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
    const [text, setText] = useState('Sing!');
    const [fill, setFill] = useState('#ffffff');
    const [stroke, setStroke] = useState('#ffd600');
    const [background, setBackground] = useState('#000000');
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                Input Text here:
                <input onChange={(e) => setText(e.target.value)} value={text} />
                Input Fill here:
                <input onChange={(e) => setFill(e.target.value)} value={fill} />
                Input Stroke here:
                <input onChange={(e) => setStroke(e.target.value)} value={stroke} />
                Input Background Color here:
                <input onChange={(e) => setBackground(e.target.value)} value={background} />
            </div>
            <div className={styles.right} style={{ backgroundColor: background }}>
                <svg height="400px" width="900px">
                    <g>
                        <text
                            style={{ '--stroke-color': stroke }}
                            x="50%"
                            y="50%"
                            fill={fill}
                            dominantBaseline="middle"
                            textAnchor="middle"
                            fontFamily="Madgue"
                            fontSize="10rem"
                        >
                            {text}
                        </text>
                    </g>
                </svg>
            </div>
        </div>
    );
}
