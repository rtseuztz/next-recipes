"use client"
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../../config/firebase"
import { FirebaseError } from 'firebase/app';


export default function LoginPage() {

    async function signIn(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(event.currentTarget)
        const email = event.currentTarget.email.value;
        const password = event.currentTarget.password.value;
        if (email === '' || password === '') {
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('success');
        } catch (error) {
            const FBErr = error as FirebaseError
            console.log(FBErr.name);
        }
    }

    return (
            <form className="flex flex-col align-top items-center space-y-2 p-24" onSubmit={signIn}>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
    )
}