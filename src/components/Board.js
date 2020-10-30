import React from 'react';
import Square from './Square'


function Board({ x, y }) {

    return (new Array(x)
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
    )
}

export default Board;