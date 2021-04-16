import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import '../common.css';

const Workers = (props) => {
    const {name, designation,ratting, img} = props.info;
    const star = <FontAwesomeIcon icon={'star'} />
    const emptyStar = <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>

    return (
        <div>
            <div className="d-flex py-2 border-bottom">
                <img src={img} alt="workers" className="mr-3"/>
                <div>
                    <h6>{name}</h6>
                    <p>{designation}</p>
                    <span className="star"> {star}</span> <span className="star"> {star}</span><span className="star"> {star}</span>
                    <span className="emptyColor">{emptyStar}</span>
                    <span className="ml-2 emptyColor">{ratting} Rate</span>
                </div>
            </div>
        </div>
    );
};

export default Workers;