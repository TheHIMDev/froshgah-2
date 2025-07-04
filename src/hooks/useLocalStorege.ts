import { useEffect, useState } from "react"

export function useLocalStorage<T>(key : string , initialValue:T) {
    const [value , setValue] = useState<T>(() => {
        let localValue = localStorage.getItem(key)

        if(localValue !== null) {
            return JSON.parse(localValue)
        } else {
            return initialValue
        }
    })

    useEffect(()=> {
        localStorage.setItem(key , JSON.stringify(value))
    },[key , value])

    return [value, setValue] as [typeof value , typeof setValue]
}