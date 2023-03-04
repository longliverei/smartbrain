import React from "react";
import './style.scss';

export const ImageLinkForm = () => {
    return (
        <div className="image-box">
            <p>
                {'This Magic Brain will detect faces in your pictures.'}
            </p>
            <div>
                <input type='text' />
                <button>Detect</button>
            </div>
        </div>
    )
}