import { useState } from 'react'
import axios from 'axios'
import styles from '../../styles/mem-style/forgetPassword.module.css'

const ForgetPassword = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('/api/reset-password', { email })
      setMessage(response.data.message)
      setErrorMessage('')
    } catch (err) {
      setMessage('')
      setErrorMessage('資料填寫錯誤')
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles['card-container']}>
        <h1 className={styles['for-title']}>忘記密碼</h1>
        <form onSubmit={handleSubmit}>
          <input
            className={styles['form-control']}
            type="email"
            placeholder="輸入電子郵件"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setErrorMessage('') // 當使用者輸入 email 時，清除錯誤訊息
            }}
            required
          />
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}
          <button type="submit" className={styles['reset-btn']}>
            重置密碼
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  )
}

export default ForgetPassword
