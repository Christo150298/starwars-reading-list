export const getFetch = (url) => {
    return fetch(url)
    .then( res => res.json())
};

export const getMultipleFetch = async (urlList) => {
   
    return await Promise.all( urlList.map(element => {
        return fetch(element.url)
        .then( res => res.json())        
    }));
};
