import { useRef } from "react";
import { useNavigate } from "react-router-dom";
export default function OTP() {
    const navigate = useNavigate();
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];
    //here we created a array of hooks and mount each useRef hook for each input box when we trigger to one box and give input it shift focus to next input box
    const myStyles = {
        width: "30px",
        height: "30px",
        margin: '6px',
        textAlign: 'center'

    };
    const handleInputChange = (index, value) => {

        if (value && index < inputRefs.length - 1) {
            inputRefs[index + 1].current.focus();
        }
    };

    return (
        <div id="box" style={{ display: "flex", justifyContent: 'center', flexDirection: "column" }}>
            <h3>Login via OTP</h3>
            <div>
                {inputRefs.map((value, index) => (<input key={index} ref={inputRefs[index]} style={myStyles} className="otp-box" maxLength="1" onChange={(e) => { handleInputChange(index, parseInt(e.target.value)) }}></input>))}
            </div>
            <button onClick={() => (navigate('/success'))} style={{ marginTop: '10px' }}>Login</button>
        </div>
    )
}