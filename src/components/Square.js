import React from 'react';

function Square({ colour, up, down, left, right, onClick }) {



    const onClickHandler = (message) => console.log(message);
    return (
        <div className="square">
                <svg height="50" width="50">
                    <polygon points="25,25 0,50 50,50" className="triangle bottom" onClick={() => onClickHandler("bottom")} />
                    <polygon points="25,25, 0,0 0,50" className="triangle left" onClick={() => onClickHandler("left")} />
                    <polygon points="25,25 0,0 50,0" className="triangle top" onClick={() => onClickHandler("top")} />
                    <polygon points="25,25 50,0 50,50" className="triangle right" onClick={() => onClickHandler("right")} />
		            Sorry, your browser does not support inline SVG.
	            </svg>
        </div>
    )
}

export default Square;