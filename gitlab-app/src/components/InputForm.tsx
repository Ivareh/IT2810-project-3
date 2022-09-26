import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import {useState} from "react";

export default function InputForm() {
    const [domain, setDomain] = useState('https://gitlab.stud.idi.ntnu.no/')
    const [id, setId] = useState('')
    const [token, setToken] = useState('')

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        console.log(domain)

    }


    return (
        <div>
            <form
                onSubmit={handleSubmit}
                style={{display: "flex"}}>
                <TextField id="outlined-search"
                           fullWidth
                           label="Domain"
                           type="text"
                           value={domain}
                           onChange={(event) => {
                               setDomain(event.target.value)
                               console.log(domain)
                           }}
                />
                <TextField id="gitlab-id"
                           label="id"
                           sx={{width: 500}}
                           type="number"
                           value={id}
                           onChange={(event) => {
                               setId(event.target.value)
                               console.log(token)
                           }}
                />
                <TextField id="outlined-search"
                           fullWidth
                           label="Token"
                           type="text"
                           value={token}
                           onChange={(event) => {
                               setToken(event.target.value)
                               console.log(token)
                           }}
                />
                <Button
                    variant="contained"
                    type={'submit'}
                    endIcon={<SendIcon/>}>
                    Get
                </Button>
            </form>
        </div>
    )

}