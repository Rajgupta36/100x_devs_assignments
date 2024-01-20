
import './card.css'
export default function Card({ props }) {
    return (
        <div id="container">
            <div id="main-content">
                <div id="img"><img src={props.img} alt="User" /></div>
                <div id="content">
                    <h3 >{props.name} <span>({props.id})</span><br /><span>{props.bio}</span></h3>
                    <hr className="horizontal-line" />
                    <div id='details'>
                        <div className="smalldiv" id="followers"><b>{props.repos}</b><p>repos</p></div>
                        <div className="smalldiv" id="likes"><b>{props.gists}</b><p>gists</p></div>
                        <div className="smalldiv" id="photo"><b>{props.following}</b><p>following</p></div>
                    </div>
                </div>
            </div>
        </div >
    )
}