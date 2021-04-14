import styles from './index.module.css'
import cn from 'classnames'

const index = () => {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.desc}>
            <h1 className={cn(styles.title, styles['text-primary'])}>Join our community</h1>
            <h2 className={cn(styles.subtitle, styles['text-secondary'])}>30-day, hassle-free money back guarantee</h2>
            <p className={cn(styles['text-gray'], styles['font-m'])}>
              Gain access to our full library of tutorials along with expert code reviews.
            </p>
            <p className={cn(styles['text-gray'], styles['font-m'])}>
              Perfect for any developers ho are serious about honing their skills.
            </p>
          </div>

          <div className={cn(styles.signup, styles['flex-column'], styles['justify-center'], styles['items-start'])}>
            <h1 className={cn(styles.title, styles['font-l'])}>Monthly Subscription</h1>
            <h2 className={cn(styles.subtitle, styles['font-xl'])}>
              $29 <span className={styles.label}>per month</span>
            </h2>
            <p>Full access for less than $1 a day</p>
            <button className={styles['btn-primary']}>Sign Up</button>
          </div>

          <div className={styles.why}>
            <h1 className={cn(styles.title, styles['font-l'])}>Why Us</h1>
            <p>Tutorials by industry experts</p>
            <p>Peer & expert code review</p>
            <p>Coding exercises</p>
            <p>Access to our GitHub repos</p>
            <p>Community forum</p>
            <p>New videos every week</p>
          </div>
        </div>

        <footer className={styles.footer}>
          <p>
            Challenge by
            <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
              Frontend Mentor
            </a>
            . Coded by
            <a href="https://github.com/alicanerdurmaz" target="_blank">
              {' '}
              Alican Erdurmaz
            </a>
            .
          </p>
        </footer>
      </div>
    </>
  )
}

export default index
