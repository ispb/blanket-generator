import React from 'react';

function Menu({ x, y, setX, setY }) {

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(x)
        console.log(y)
    }

    return (
        <div className="Menu-box">
            <form onSubmit={handleSubmit}>
                <input name="xInput" type="text" value={x} onChange={(e) => setX(parseInt(e.target.value))}/>
                <input name="yInput" type="text" value={y} onChange={(e) => setY(parseInt(e.target.value))} />
                {/* <input name="democheckbox" type="checkbox" value="1" /> Checkbox */}
                <button type="submit" value="Submit">Submit</button>
            </form>
        </div>
    )


}

export default Menu;