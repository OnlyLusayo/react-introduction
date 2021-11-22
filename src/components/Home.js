import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "../custom/useFetch";

const Home = () => {

    //let name = 'mario';
    // const HandleClickAgain = (name, e) => {
    //     console.log('Hello' + name, e.target);}
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title={'All Blogs'} />}

            {/* adding brackets to a function will trigger it */}
            {/* <button onClick={HandleClick}>Click Me Again</button> */}
        </div>
    );
}

export default Home;