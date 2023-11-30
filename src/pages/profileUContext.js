
// eslint-disable-next-line no-unused-vars
import {Link} from 'react-router-dom'
import { ChangeProfile } from '../components/ChangeProfile'
import {useContext} from 'react'
import { AppContext } from '../App';
export const Profile =()=>{
    const {username} = useContext(AppContext)
    return(
        
        <div>PROFILE , user is {username}
   <ChangeProfile />
        </div>
    )
}
// change profile abstarcts 