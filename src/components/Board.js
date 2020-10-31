import React from 'react';
import Square from './Square'

function Board({ x, y }) {

    return (
        <div className="boardBox">{new Array(x)
            .fill(null)
            .map((x, i) =>
                <div key={i}>
                    {new Array(y)
                        .fill(null)
                        .map((y, j) =>
                            <Square key={j}
                                left={false}
                                right={false}
                                up={false}
                                down={true}
                            />)
                    }
                </div>
            )
        }</div>
    )


}

export default Board;