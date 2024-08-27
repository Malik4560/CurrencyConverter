import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/d27aa2f5dcbc8235862d6861/latest/USD`)
        .then((res) => res.json())
        .then((res) => setData(res.conversion_rates))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;