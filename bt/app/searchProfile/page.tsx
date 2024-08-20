'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function page() {
    const [name,setName] = useState<string>("");
    const [categories,setCategories] = useState<string>("");
    const [searchName,setSearchName] = useState('')
    const [searchCategories,setSearchCategories] = useState("");
    const route = useRouter();
    const hanldeChangeName = (e:React.ChangeEvent<HTMLInputElement>) =>{
        let name = e.target.value;
        setName(name);

    }
    const searchParam = useSearchParams();
    const handleChangeCategories = (e:React.ChangeEvent<HTMLInputElement>) => {
        let categories = e.target.value
        setCategories(categories);
    }
    const handleClick =()=>{
        route.push(`/searchProfile/?name=${encodeURIComponent(name)}&categories=${encodeURIComponent(categories)}`);
    }
    useEffect(() => {
        const searchName = searchParam.get('name');
        const searchCategories = searchParam.get('categories');
        if (searchName) {
            setSearchName(searchName);
        }
        if (searchCategories) {
            setSearchCategories(searchCategories);
        }
    }, [searchParam]);
  return (
    <div>
        <p>Tên sản phẩm: {searchName}</p>
        <p>Ten danh muc: {searchCategories}</p>
        <input onChange={hanldeChangeName} placeholder='tim kiem theo ten' type="text" /> <br />
        <input onChange={handleChangeCategories} placeholder='tim kiem theo danh muc' type="text" /><br />
        <button onClick={handleClick}>Tim kiem</button>
    </div>
  )
}
