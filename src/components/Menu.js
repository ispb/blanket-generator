import React, { useEffect } from 'react';

function Menu({ x, y, setX, setY }) {

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(x)
        console.log(y)
    }

    const handleXChange = (evt) => {
        evt.preventDefault();
        (evt.target.value < 1 || isNaN(evt.target.value)) ? setX(parseInt(1)) : setX(parseInt(evt.target.value));
    }

    const handleYChange = (evt) => {
        evt.preventDefault();
        (evt.target.value < 1 || isNaN(evt.target.value)) ? setY(parseInt(1)) : setY(parseInt(evt.target.value));
    }

    return (
        <div className="Menu-box">
            <form onSubmit={handleSubmit} className="dimensions-form">
                <label>
                    Width:
                    <input name="xInput" type="text" value={x} onChange={handleXChange} />
                </label>

                <label>
                    Height:
                    <input name="yInput" type="text" value={y} onChange={handleYChange} />
                </label>
                {/* <input name="democheckbox" type="checkbox" value="1" /> Checkbox */}
                {/* <button type="submit" value="Submit">Submit</button> */}
            </form>
        </div>
    )


}

export default Menu;