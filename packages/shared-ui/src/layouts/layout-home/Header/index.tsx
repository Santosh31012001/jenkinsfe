'use client'
import React from 'react'

// import components
import TopBar from './components/topBar/topBar'
import Title from './components/title/title'
import SearchBar from './components/searchBar/searchBar'

// import styles
import * as S from './index.styles'

const Header = () => {
  return (
    <S.DivWrapper>
      <S.ImageWrapper
        src="/images/img1.png"
        alt="Background"
        className="background-image"
      />
      <S.ContentOverlay className="content-overlay">
        <TopBar />
        <Title />
        <SearchBar />
      </S.ContentOverlay>
    </S.DivWrapper>
  )
}

export default Header
