import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';


const Candidate = (props) => {
    const { name, designation, ratting, img } = props.info;
    const star = <FontAwesomeIcon icon={'star'} />
    const emptyStar = <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>

    return (
        <div className='row border-bottom'>
            <div className="d-flex my-3 col-12 col-sm-10">
                <img src={img} alt="workers" className="mr-3" />

                <div>
                    <h6>{name}</h6>
                    <p>{designation}</p>
                    <span className="star"> {star}</span> <span className="star"> {star}</span><span className="star"> {star}</span>
                    <span className="emptyColor">{emptyStar}</span>
                    <span className="ml-2 emptyColor">{ratting} Rate</span>
                </div>
            </div>

            <div className="d-flex border-left my-4 col-12 col-sm-2">
                <Link to="/profile" className="text-dark d-flex align-items-center"><p><u>View Profile</u></p></Link>
            </div>
        </div>
    );
};

export default Candidate;