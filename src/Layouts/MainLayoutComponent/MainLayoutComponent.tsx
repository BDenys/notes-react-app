import React from 'react'
import { Outlet } from 'react-router-dom';

const MainLayoutComponent = () => {
  return (
    <section className='main'>

      <Outlet/>

    </section>
  )
}

export { MainLayoutComponent };
