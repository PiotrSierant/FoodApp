import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import styles from './Account.module.scss';
import {Button} from "../components/Button";
import {Spinner} from "../components/Spinner";

const Account = ({ session }) => {
    const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState(null)

    useEffect(() => {
        getProfile()
    }, [session])

    const getProfile = async () => {
        try {
            setLoading(true)
            const user = supabase.auth.user()

            let { data, error, status } = await supabase
                .from('profiles')
                .select(`username`)
                .eq('id', user.id)
                .single()

            if (error && status !== 406) {
                throw error
            }

            if (data) {
                setUsername(data.username)
            }
        } catch (error) {
            alert(error.message)
        } finally {
            setLoading(false)
        }
    }

    const updateProfile = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)
            const user = supabase.auth.user()

            const updates = {
                id: user.id,
                username,
                updated_at: new Date(),
            }

            let { error } = await supabase.from('profiles').upsert(updates, {
                returning: 'minimal', // Don't return the value after inserting
            })

            if (error) {
                throw error
            }
        } catch (error) {
            alert(error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className={styles.container} aria-live="polite">
            {loading ? <Spinner /> : (
                <form onSubmit={updateProfile} className={styles.form}>
                    <div className={styles.form__email}>Email:<span>{session.user.email}</span> </div>
                    <div className={styles.form__input}>
                        <label htmlFor="username">Name: </label>
                        <input
                            className={styles.start__app__input__effect}
                            id="username"
                            type="text"
                            value={username || ''}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <Button
                        disabled={loading}
                        text={'Zaktualizuj dane!'}
                        onClick={() => console.log('Imię zostało zmienione!')}
                    />
                </form>
            )}
        </div>
    )
}

export default Account