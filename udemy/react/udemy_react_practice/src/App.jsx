import './App.css';
import { useState } from 'react';

export const App = () => {
    const [count, setCount] = useState(0);
    const countUp = () => setCount(count + 1);

    return (
        <>
            <p>{count}</p>
            <button onClick={countUp}>カウントアップ</button>
        </>
    );
}