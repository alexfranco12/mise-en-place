import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // const searchOptions = {
  //   key : process.env.REACT_APP_SPOONACULAR_KEY,
  //   baseURL : "https://api.spoonacular.com/recipes",
  //   cuisine : "",
  //   query : "",
  //   diet : "",
  //   tags : "",
  //   intolerances : "",
  //   number : 25,
  //   filterType : "random"
  // };

  //  if (searchOptions.filterType === 'complexSearch') {
  //     searchOptions.tags = "";
  //     searchOptions.cuisine = "cuisine="+[...tags.cuisine].join(',')+"&"
  //     searchOptions.diet = "diet="+tags.diet+"&"
  //     searchOptions.intolerances = "intolerances="+[...tags.intolerances].join(',')+"&"
  //  }

  // const url = `${searchOptions.baseURL}/${searchOptions.filterType}?${searchOptions.tags}${searchOptions.query}${searchOptions.cuisine}${searchOptions.diet}${searchOptions.intolerances}number=${searchOptions.number}&apiKey=${searchOptions.key}`

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { 
      method: "GET",
      signal: abortCont.signal,
      }).then(res => {
        if(!res.ok) throw Error('could not fetch data for that resource')
        return res.json();
      })
      .then(data => {
        setData(data);
        setIsPending(false);
        setError(null)
      })
      .catch(err => {
        if(err.name === "AbortError") {
          console.log('Fetch aborted')
        } else {
          setIsPending(false)
          setError(err.message)
        }
      })

    // if we quickly switch components before fetch is completed, abort.
    return () => abortCont.abort();
  }, [url]);

  console.log(data);

  return { data, isPending, error }
}

export default useFetch