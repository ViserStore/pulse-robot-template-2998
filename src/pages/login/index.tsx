
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components'
import styles from './index.module.scss'
import Icon from '@/components/icons'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login attempt:', { email, password, rememberMe })
    // Handle login logic here
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.header}>
          <Link href="/" className={styles.logo}>
            <Icon icon="logo" width={120} height={40} />
          </Link>
          <h1 className={styles.title}>Log In to Binance</h1>
          <p className={styles.subtitle}>Welcome back! Please enter your details.</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              Email or Phone
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              placeholder="Enter your email or phone number"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <div className={styles.passwordWrapper}>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={styles.passwordToggle}
              >
                <Icon icon={showPassword ? 'eyeOff' : 'eye'} width={20} height={20} />
              </button>
            </div>
          </div>

          <div className={styles.formOptions}>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span className={styles.checkmark}></span>
              Remember me
            </label>
            <Link href="/forgot-password" className={styles.forgotLink}>
              Forgot password?
            </Link>
          </div>

          <Button
            title="Log In"
            variant="primary"
            fullWidth={true}
            size="lg"
          />
        </form>

        <div className={styles.divider}>
          <span className={styles.dividerLine}></span>
          <span className={styles.dividerText}>or continue with</span>
          <span className={styles.dividerLine}></span>
        </div>

        <div className={styles.socialButtons}>
          <Button
            title="Google"
            variant="secondary"
            icon="google"
            fullWidth={true}
          />
          <Button
            title="Apple"
            variant="secondary"
            icon="apple"
            fullWidth={true}
          />
        </div>

        <div className={styles.footer}>
          <p>
            Don't have an account?{' '}
            <Link href="/register" className={styles.registerLink}>
              Sign up for free
            </Link>
          </p>
        </div>
      </div>

      <div className={styles.background}>
        <div className={styles.backgroundImage}></div>
        <div className={styles.overlay}></div>
      </div>
    </div>
  )
}
