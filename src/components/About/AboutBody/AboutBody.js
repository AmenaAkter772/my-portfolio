import React from 'react';
import { useHistory } from 'react-router-dom';
import img from '../../../image/img2.png'

const AboutBody = () => {
    const history = useHistory()
    const addHandler= () => {
        history.push("/contact")
    }
    return (
        <div className="container">
            <div className="text-center">
               <img style={{width:'400px'}} src={img} alt="" className="img-fluid" />
               <h3 style={{color:'#203C51'}}>Amena Akter :- Web Developer & Graphics Designer</h3>
               
            </div>
            <div>
                <p>After graduating Bachelor of Business Studies(First Class Honours) I spent my time working both as a freelance web developer and graphics designer. I acquired project and time management skills, as well as the ability to communicate with team members and clients.</p><br/>
                <p>I have worked on a multitude of web and print based projects for a range of clients providing Development (javascript, ES6, React.js, Bootstrap, material-UI, Firebase, Heroku, HTML, CSS, SASS, HTML5) and Graphics Design (Photoshop, Illustrator)</p><br/>
                <p>There's nothing I enjoy more than designing and developing good website for nice people. It really is that simple. If you've got a project you'd like to work on with me jus get in touch and we can get to work!</p><br/>
                <button onClick={addHandler} className="btn btn-primary btn-brand mb-5">Contact Me</button>
            </div>
        </div>
    );
};

export default AboutBody;