import { useState } from "react";

export default function Header({ search, setSearch }) {

    const [ textSearch, setTextSearch ] = useState("");
    const [ val, setVal ] = useState("");
    const [ test, setTest ] = useState("")

    function handleChange(e) {
        setTest(document.getElementById("query"))
        setVal(e.target.value);
        // setSearch(document.getElementById("query"));
       // console.log(test)
    }
    console.log(test)
    
    return (
        <>
            <input onChange={handleChange} value={val} id="query" type="text"/>
            {/* <p>{search}</p> */}
            <p>{textSearch}</p>
            
        </>
    )
}