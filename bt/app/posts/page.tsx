'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState, useEffect } from 'react'

export default function Page() {
    const [inputValue, setInputValue] = useState("")
    const [searchName, setSearchName] = useState<string | null>(null);
    
    const searchParam = useSearchParams();
    const route = useRouter();
    
    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        setInputValue(value);
    }
    
    const handleClick = () => {
        console.log('gia tri tim kiem', inputValue);
        route.push(`/posts/?search=${encodeURIComponent(inputValue)}`);
        setSearchName(inputValue);
    }

    // useEffect(() => {
    //     const searchName = searchParam.get("search");
    //     setSearchName(searchName);
    //     if (searchName) {
    //         setSearchName(searchName);
    //             }
    // }, [searchParam]);

    return (
        <div>
            <p>Search Value: {searchName}</p>
            <input 
                onChange={handleChangeInput}
                type="text" name="" id="" 
            />
            <button onClick={handleClick}>Tim kiem</button>
        </div>
    )
}
