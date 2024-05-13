import { useState } from "react";

export default function Header({ search, setSearch }) {

    const [ textSearch, setTextSearch ] = useState("");
    const [ val, setVal ] = useState("");
    const [ test, setTest ] = useState("")

    function handleSubmit(e) {
        setTest(document.getElementById("query"))
        //setVal(e.target.value);
        // setSearch(document.getElementById("query"));
       console.log(test)
    }
    //console.log(test)
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input value={val} id="query" type="text"/>
            </form>
            {/* <p>{search}</p> */}
            <p>{test}</p>
            
        </>
    )
}