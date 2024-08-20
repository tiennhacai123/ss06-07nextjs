'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function Product() {
    const searchParam = useSearchParams();

    const idProduct = searchParam.get('id');
    console.log('idProduct',idProduct);
    
    const nameProduct= searchParam.get('name');
    console.log(nameProduct);
    
  return (
    <div>
        Trang chi tiết sản phẩm 
        sản phẩm tìm kiếm có id là {idProduct}
    </div>
  )
}
