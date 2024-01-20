import './card.css'
export default function Card({ props }) {
    return (
        <div id="container">
            <div id="main-content">
                <div id="img"><img src={props.img} alt="User" /></div>
                <div id="content">
                    <h3 >{props.name} <span>{props.Age}</span><br /><span>{props.city}</span></h3>
                    <hr className="horizontal-line" />
                    <div id='details'>
                        <div className="smalldiv" id="followers"><b>{props.followers}</b><p>followers</p></div>
                        <div className="smalldiv" id="likes"><b>{props.likes}</b><p>likes</p></div>
                        <div className="smalldiv" id="photo"><b>{props.photos}</b><p>photos</p></div>
                    </div>
                </div>
            </div>
        </div >
    )
}