import {
    useRecoilState,

} from "recoil"
import { colorAtom } from "../atom/atom.jsx"
import './background.css'

function BackgroundColor() {
    const [color, ColorState] = useRecoilState(colorAtom);
    console.log(color);
    return (
        <>
            <div id='main' style={{ backgroundColor: color }}>
                <div id="container" >
                    {/* for more efficient code we also create a button component seperately and use map function  */}
                    <button style={{ backgroundColor: "red" }} className='button' onClick={() => { ColorState("red") }}>Red</button>

                    <button style={{ backgroundColor: "yellow" }} className='button' onClick={() => { ColorState("yellow") }}>Yellow</button>

                    <button style={{ backgroundColor: "green" }} className='button' onClick={() => { ColorState("green") }}>Green</button>

                    <button style={{ backgroundColor: "violet" }} className='button' onClick={() => { ColorState("violet") }}>Violet</button>

                    <button style={{ backgroundColor: "orange" }} className='button' onClick={() => { ColorState("orange") }}>Orange</button>

                    <button style={{ backgroundColor: "grey" }} className='button' onClick={() => { ColorState("grey") }}>Grey</button>

                    <button style={{ backgroundColor: "white" }} className='button' onClick={() => { ColorState("white") }}>White</button>
                </div>
            </div>

        </>
    )
}

export default BackgroundColor;
