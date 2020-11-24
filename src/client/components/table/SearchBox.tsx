import React, { useEffect, useState } from 'react';

interface Props {
    update: (val:string)=>void;

}

const SearchBox: React.FC<Props>=(props: Props): React.ReactElement<Props>  =>   {

    const [id, setId] = useState("");

    useEffect(() => {
        props.update( id );
    }, [id])


    function handleIdChange(event: React.ChangeEvent<HTMLInputElement>) {

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