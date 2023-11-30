import { Component, createContext, useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../App';
export const ChangeProfile = () => {
    const [newUsername, setNewUsername] = useState("")
    const { setUsername } = useContext(AppContext)
    return (<div>

        <input onChange={(event) => {
            setNewUsername(event.target.value)
        }} />
        <button onClick={() => {
            setUsername(newUsername)
        }}>Change Username</button>
    </div> 
    )
};
// statemanegment in react useContext hook
//prop drilling is paasimg prop in a component 
//setUsername is passed down as aprop in profiles and as onclick on the change username as setusername 
//usecontext hook
//createContext function
//context global a store of the info to be passed down
//{/*<Component.provider></Component.provider>*/}
//when you create a provider you have to specify what variable you want to pass down
//component replaces the props to be passed down 
