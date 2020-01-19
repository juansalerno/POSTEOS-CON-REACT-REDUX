import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section proyect-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Proyect Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quae eius perspiciatis? Magnam dicta officiis est, aliquid eligendi esse odit alias facilis, minus recusandae autem et nam quibusdam odio corrupti.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Net Ninja</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
