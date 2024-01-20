import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom"
import { phone } from "../atom/atom";
export default function Entry() {
    const navigate = useNavigate();
    const [value, setvalue] = useRecoilState(phone);
    const forward = (value) => {
        if (!value) {
            alert("enter phone no.");
        } else {
            navigate('/verify')
        }

    }
    return (
        <>
            <div id="container" style={{ display: "flex", justifyContent: 'center', flexDirection: "column" }}>
                <h3> Login via OTP</h3>

                <input placeholder="enter mobile no." onChange={(e) => { setvalue((e.target.value)); console.log(value) }}></input>
                <button onClick={() => forward(value)} style={{ marginTop: '15px' }} >Send OTP</button>
            </div >
        </>
    )
}