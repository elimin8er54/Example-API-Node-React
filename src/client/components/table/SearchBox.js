import React, { useEffect, useState } from 'react';

function SearchBox(props) {

    const [id, setId] = useState("");

    useEffect(() => {
        props.update({ id });
    }, [id])


    function handleIdChange(event) {

        setId(event.target.value);


    }



    return (
        <React.Fragment>
            <div className="search-box">
                <label htmlFor="id">Property ID</label>
                <input name="id" className="search-inputs" onChange={handleIdChange}
                    value={id} />
            </div>
        </React.Fragment>
    )

}

export default SearchBox;