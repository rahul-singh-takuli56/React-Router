import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // one of the method 
    // const [data, setData] = React.useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/rahul-singh-takuli56')
    //         .then((response) => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data);
    //         });
    // }, []);


    const data = useLoaderData();

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github followers: {data.followers}
            <img src={data.avatar_url} width={300}></img>
        </div>
    )
}

export default Github


// 2nd method to fetch the data 
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/rahul-singh-takuli56')
    return response.json();

}
