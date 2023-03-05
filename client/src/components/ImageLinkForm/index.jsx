import React from "react";
import './style.scss';
import './button.scss';

export const ImageLinkForm = () => {
    return (
        <div className="image-box">
            <p>
                {'Feed the br4in.'}
            </p>
            <div>
                <input type='text' placeholder="type here, human" />
                <button className="button-49">Detect</button>
            </div>
        </div>
    )
}