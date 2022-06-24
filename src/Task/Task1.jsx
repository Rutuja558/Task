import React, { useState } from 'react'

export default function Task1() {
    const [count, setCount] = useState(0)
    const [color, setcolor] = useState("white")

    const handleClick = arg => {
        switch (arg) {
            case "+": setCount(count + 1)
                break;
            case "-": setCount(count - 1)
                break;
            case "-2": setCount(count - 2)
                break;
            case "-5": setCount(count - 5)
                break;
            case "-10": setCount(count - 10)
                break;
            case "+2": setCount(count + 2)
                break;
            case "+5": setCount(count + 5)
                break;
            case "+10": setCount(count + 10)
                break;
            case "Square": setCount(count * count)
                break;
            case "Cube": setCount(count * count * count)
                break;
            case "Reset": setCount(0)
                break;
            case "bg red": setcolor("red")
                break;
            case "bg blue": setcolor("blue")
                break;
            case "bg white": setcolor("white")
                break;
            default:
                break;
        }
    }
    const handleChange = e => {
        setcolor(e.target.value)
    }

    return (
        <>
            <div style={{ backgroundColor: color }}>
                <h1>{count}</h1>
                <div>
                    <button onClick={e => handleClick("+")}>+</button>
                    <button onClick={e => handleClick("-")}>-</button>
                    <input type="color" onChange={handleChange} />
                </div>
                <div>
                    <button onClick={e => handleClick("-2")}>-2</button>
                    <button onClick={e => handleClick("-5")}>-5</button>
                    <button onClick={e => handleClick("-10")}>-10</button>
                    <button onClick={e => handleClick("+2")}>+2</button>
                    <button onClick={e => handleClick("+5")}>+5</button>
                    <button onClick={e => handleClick("+10")}>+10</button>
                </div>
                <div>
                    <button onClick={e => handleClick("Square")}>Square</button>
                    <button onClick={e => handleClick("Cube")}>Cube</button>
                    <button onClick={e => handleClick("Reset")}>Reset</button>
                </div>
                <div>
                    <button disabled={color === "red" ? true : false} onClick={e => handleClick("bg red")}>bg red</button>
                    <button disabled={color === "blue" ? true : false} onClick={e => handleClick("bg blue")}>bg blue</button>
                    <button disabled={color === "white" ? true : false} onClick={e => handleClick("bg white")}>bg white</button>
                </div>
            </div>
        </>
    )
}