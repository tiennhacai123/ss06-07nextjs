import React from 'react'

export default function page(props:any) {
    console.log(props);
    const {params} = props
  return (
    <div>
        <p>Ban dang xem blog voi duong dan {params.slug.join('/')}</p>
    </div>
  )
}
