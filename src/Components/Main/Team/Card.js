import "./Card.css"

function Card({Devimg, name, role, github, linkedin, mail}) {
    return (
        <>
            <div className="card">                
                <div id="dev-img">
                    <img src={Devimg} alt="" />
                </div>
                <div id="dev-div">
                    <h3>{name}</h3>
                    <h4>{role}</h4>
                    <div className="socials">
                        <ul>
                            <li><a href={github} target="_blank"><i className="fa fa-github"></i></a></li>
                            <li><a href={linkedin} target="_blank"><i className="fa fa-linkedin"></i></a></li>
                            <li><a href={mail} target="_blank"><i className="fa fa-envelope-o"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;