import './App.css';
import { useState } from 'react';

function App() {
  const [isRed, setIsRed] = useState(true);

  const [text, setText] = useState('Hello world');
  const [color, setColor] = useState('#ff0080');

  const [count, setCount] = useState(1);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Get start with React</h1>

        <section className="card card-pink">
          <h2 className="card-title">
            <span className="badge">1</span>
            เปลี่ยนสี button และข้อความเมื่อกดปุ่ม
          </h2>
          <button
            className={`btn ${isRed ? 'btn-pink' : 'btn-blue'}`}
            onClick={() => setIsRed(!isRed)}
          >
            {isRed ? 'Go Blue' : 'Go Red'}
          </button>
        </section>

        <section className="card card-blue">
          <h2 className="card-title">
            <span className="badge">2</span>
            แสดงข้อความและสีตามที่กำหนด (onChange)
          </h2>
          <p className="preview" style={{ color: color }}>
            {text}
          </p>
          <div className="row">
            <input
              className="field"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <input
              className="field"
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
        </section>

        <section className="card card-mint">
          <h2 className="card-title">
            <span className="badge">3</span>
            แสดงตัวเลข เพิ่ม / ลด ตามการกดปุ่ม
          </h2>
          <h3 className="count">{count}</h3>
          <div className="row">
            <button className="btn btn-mint" onClick={() => setCount(count + 1)}>
              Count Up
            </button>
            <button
              className="btn btn-peach"
              onClick={() => setCount(count - 1)}
            >
              Count Down
            </button>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;