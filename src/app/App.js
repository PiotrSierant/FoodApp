import { useState, useEffect } from 'react';
import { supabase } from '../auth/supabaseClient';
import Auth from '../auth/Auth';
import Account from '../auth/Account';
import styles from './App.module.scss';


export default function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
      <div className={styles.container}>
        {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
      </div>
  )
}