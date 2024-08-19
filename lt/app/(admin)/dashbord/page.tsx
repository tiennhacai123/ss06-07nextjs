// import Button from '../../../components/Button'; cách import cũ
import Button from '@/components/Button' //cách import mới sau khi dùng path alias (ngắn gọn hơn)
import Helpers from '@/utils/Helpers';
import React from 'react'

export default function Dashbord() {
  return (
    <div>page
        <Button></Button>
        <Helpers></Helpers>
    </div>
  )
}
