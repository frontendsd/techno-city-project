import React from 'react'
import Main from '../components/main/Main'
import FilterComponent from './filter/FilterComponent'
// import Footer from '../components/footer/Footer'

function Home() {
  return (
      <div>
          <Main/>
          <FilterComponent />
          {/* <Footer/> */}
    </div>
  )
}

export default Home