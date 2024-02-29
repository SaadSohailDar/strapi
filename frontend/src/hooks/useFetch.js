import { useEffect, useState } from "react"

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      
      try {

        await fetch(url)
            .then((res) => res.json()) 
              .then((json) => {
                setData(json);
                setLoading(false)
              });




        // const res = await fetch(url)
        // // const json = await json.parse()
        // console.log("response",res.data);
        // const json = JSON.parse(res)
        // setData(json);
        // setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    fetchData();
  }, [url])

  return { loading, error, data }
}

export default useFetch