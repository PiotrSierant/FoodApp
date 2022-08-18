import { useState } from 'react';
import { supabase } from './supabaseClient';
import styles from './Auth.module.scss';
import Logo from './Logo/Logo';
import Login from './Login/Login';
import {Spinner} from "../components/Spinner";
export default function Auth() {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)
            const { error } = await supabase.auth.signIn({ email })
            if (error) throw error
            alert('Check your email for the login link!')
        } catch (error) {
            alert(error.error_description || error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <main className={styles.container}>
            <section aria-live="polite">
                {loading ? <Spinner /> : (
                    <section className={styles.container__app}>
                        <Logo />
                        <form onSubmit={handleLogin}>
                            <Login email={email} setEmail={setEmail}/>
                        </form>
                    </section>
                )}
            </section>
        </main>
    )
}