'use client';
import Link from "next/link"
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '../../utils/firebase'

export default function Nav() {
    const [user, loading] = useAuthState(auth);
    return (
        <div className="flex justify-between items-center py-10">
            <Link href={"/"}>logo</Link>
            <ul>
                {!user &&
                    (<Link href={"/auth/login"} legacyBehavior>
                        <a className="py-2 px-4 text-lg bg-teal-500 text-wide rounded-lg font-medium ml-8">Join now</a>
                    </Link>)
                }
                {
                    user && (
                        <div>
                            <Link href={'/dashboard'}>
                                <img src={user.photoURL} 
                                    alt="avatar"
                                    referrerPolicy="no-referrer"
                                    className="w-12 rounded-full border"
                                />
                            </Link>
                            {/* <h2>{user.displayName}</h2> */}
                        </div>
                    )
                }
            </ul>
        </div>
    )
}