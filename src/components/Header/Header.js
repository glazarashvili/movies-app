import React from 'react'

import { Link, NavLink, useLocation } from 'react-router-dom'

import classes from './Header.module.css'

import TvSvg from '../SVG/TvSvg'
import MovieSvg from '../SVG/MovieSvg'
import TvShowsSvg from '../SVG/TvShowsSvg'
import CinemaSvg from '../SVG/CinemaSvg'

const Header = () => {
  const [offset, setOffset] = React.useState(0)
  React.useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, [])

  const location = useLocation()

  const check = offset < 80 && location.pathname === '/home'

  const bgColor = check ? 'transparent' : 'white'
  const fill = check ? 'white' : 'black'
  const fontColor = check ? classes['before-scroll'] : classes['after-scroll']

  // #2F83C6

  return (
    <div
      className={classes['header-bar']}
      style={{ background: bgColor, transition: 'background 0.3s linear' }}>
      <Link to='/home'>
        <h1 className={`${classes.heading} ${fontColor}`}>MovieDB</h1>
      </Link>
      <nav className={classes['header-navigation']}>
        <NavLink activeClassName={classes['nav-link']} to='/tv'>
          <div>
            <MovieSvg fill={fill} />
            <p className={fontColor}>MOVIES</p>
          </div>
        </NavLink>
        <NavLink to='/movies' activeClassName={classes['nav-link']}>
          <div>
            <TvSvg fill={fill} />
            <p className={fontColor}>TV</p>
          </div>
        </NavLink>
        <NavLink to='/cinemania' activeClassName={classes['nav-link']}>
          <div>
            <TvShowsSvg fill={fill} />
            <p className={fontColor}>CINEMANIA</p>
          </div>
        </NavLink>
        <NavLink to='/tvshows' activeClassName={classes['nav-link']}>
          <div>
            <CinemaSvg fill={fill} />
            <p className={fontColor}>TV SHOWS</p>
          </div>
        </NavLink>
      </nav>
    </div>
  )
}

export default Header
