
import { useState } from 'react'
import styles from './index.module.scss'
import { HeaderSearch, NavigationMenus, QrDownload } from '@/views'
import Icon from '@/components/icons'
import { Link } from 'react-router-dom'

export default function Header() {
  const [search, setSearch] = useState<Boolean>(false)
  const [qrDownload, setQrDownload] = useState<Boolean>(false)
  const [globe, setGlobe] = useState<Boolean>(false)
  const [theme, setTheme] = useState('light')

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Link to="/">
            <Icon icon="logo" width={120} height={24} />
          </Link>
        </div>
        <NavigationMenus />
      </div>
      <div className={styles.right}>
        <ul>
          <li
            onMouseOver={() => { setSearch(true) }} onMouseOut={() => { setSearch(false) }}
          >
            <div className={styles.element}>
              <Icon icon={'search'} />
            </div>
            <div className={styles.sub}>
              <HeaderSearch visible={search} />
            </div>
          </li>
          <li>
            <div className={styles.element}>
              <Link to="/login" className={styles.text}>Log In</Link>
            </div>
          </li>
          <li>
            <div className={styles.element}>
              <Link to="#" className={`${styles.button}`}>
                <Icon icon={'gift'} />
                Register
              </Link>
            </div>
          </li>
          <li
            onMouseOver={() => { setQrDownload(true) }} onMouseOut={() => { setQrDownload(false) }}
          >
            <div className={styles.element}>
              <Icon icon={'qrDownload'} />
            </div>
            <div className={styles.sub}>
              <QrDownload visible={qrDownload} />
            </div>
          </li>
          <li
            onMouseOver={() => { setGlobe(true) }} onMouseOut={() => { setGlobe(false) }}
          >
            <div className={styles.element}>
              <Icon icon={'globe'} />
            </div>
            <div className={styles.sub}>
              {/* <LanguageAndCurrency visible={globe} /> */}
            </div>
          </li>
          <li>
            <div className={styles.element} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
              <Icon icon={theme === 'light' ? 'darkMode' : 'lightMode'} />
            </div>
          </li>
        </ul>
      </div>
    </header>
  )
}
