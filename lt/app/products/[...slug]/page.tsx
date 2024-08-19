import React from 'react'

interface Product{
    idProduct: string
}
interface Props{
    params: any
}
export default function page(props:Props) {
    console.log(props)
    const { params } = props
  return (
    <div>trang chi tiet san pham co id la: {params.slug}</div>
  )
}
