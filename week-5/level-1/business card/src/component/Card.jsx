import { Margin } from "react-to-pdf";
import "./styles.css";

function Card({ name, description, interest, linkedin, twitter }) {
    return (
        <>
            <div id="container" >
                <h1>{name}</h1>
                <p>{description}</p>
                <h4>interest</h4>
                {interest.map((info) => <p>{info}</p>)}
                <button><a href={linkedin} rel="noreferrer" target="_blank">linkedin</a></button>
                <button><a href={twitter} rel="noreferrer" target="_blank">twitter</a></button>
            </div>
        </>
    )
}
export default Card;