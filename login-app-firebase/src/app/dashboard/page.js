'use client';
import { useAuthState } from "react-firebase-hooks/auth"
import {auth} from "../../../utils/firebase"
import {useRouter} from "next/navigation";

export default function Dashboard() {
    const [user, loading] = useAuthState(auth);
    const route = useRouter();
    if (loading) return <h1>loading...</h1>;
    if (!user) route.push('/auth/login');
    if (user)
        return (
            <div>
                Welcome to your dashboard, {user.displayName} <br/><br/>
                <button className="py-2 px-4 text-lg bg-teal-500 text-wide rounded-lg font-medium" onClick={() => auth.signOut()}>Sign Out</button>
            </div>
        )
}