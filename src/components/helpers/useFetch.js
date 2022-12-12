import React from 'react'

export const UsseFetch = function () {
    let [data,setData] = React.useState([]);

    React.useEffect(()=>{
        async function hitAPI(){
           let fetchedData =  await fetch("https://api.github.com/users")
           let jsonData = await fetchedData.json();
           setData(jsonData);
        }
        hitAPI();
    },[])
  return data;
}
