import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth';
import {app} from './config';

export const auth=getAuth(app);
export const googleProvider=new GoogleAuthProvider();

export async function googleLogin(){
 return signInWithPopup(auth,googleProvider);
}
