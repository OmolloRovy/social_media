import {useContext} from 'react'
import { AppContext } from '../App';
export const Home =(props) =>{
    const {username} = useContext(AppContext)
    return <h1>This is the home page and useer is {username} </h1>;
}
//props are deleted and managed by usecontent 