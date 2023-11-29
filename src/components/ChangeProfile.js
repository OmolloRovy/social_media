import { useState } from 'react'
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