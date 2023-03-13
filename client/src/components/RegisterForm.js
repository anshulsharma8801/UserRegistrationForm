import './RegisterForm.css'
import { useState, useRef } from 'react'
import { addUser } from '../functions';

import emailjs from 'emailjs-com';


const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(0);
    const [date, setDate] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const form = useRef();



    const handleSubmit = async (e) => {
        e.preventDefault()
        //emailjs.send('service_xt1ppm7', 'template_3ybjvqo', form.current, 'bwDYfpms3161YPNEE')

        emailjs.send("service_xt1ppm7","template_3ybjvqo",{
            email: email, username: username, phone: phone, dob: date
            },'bwDYfpms3161YPNEE');
        const newUser = {
            username,
            email,
            phone:phone-'0',
            dob:date
        }

        if(phone.length !== 10) {
            alert("Invalid phone number");
            return;
        }
        if(username === ""){
            alert("Username must be filled");
        }
        if(email === ""){
            alert("Username must be filled");
        }
        let currentDate = new Date();
        let myDate = new Date(date);
        

        let age = (((currentDate.getTime() - myDate.getTime())));
        
        if(age < (31556926000 * 18)) {
            alert("Invalid age");
            return
       
        }

        await addUser(newUser)
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3000)
    }

    return (
        <form ref={form} className="form" onSubmit={handleSubmit}>
        <div className="title">Welcome</div>
        <div className="input-container ic1">
            <input id="firstname" className="input" type="text" placeholder=" " value={username} onChange={(e) => setUsername(e.target.value)} />
            <div className="cut"></div>
            <label for="username" class="placeholder">Username</label>
        </div>
        <div className="input-container ic2">
            <input id="email" className="input" type="text" placeholder=" " value={email} onChange={(e) => setEmail(e.target.value)}/>
            <div class="cut cut-short"></div>
            <label for="email" className="placeholder">Email</label>
        </div>
        <div className="input-container ic2">
            <input id="phone" className="input" type="tel" placeholder=" " value={phone} onChange={(e) => setPhone(e.target.value)}/>
            <div class="cut cut-short"></div>
            <label for="phone" className="placeholder">Phone No.</label>
        </div>
        <div className="input-container ic2">
            <input id="date" min="" className="input" type="date" placeholder=" " value={date} onChange={(e) => setDate(e.target.value)}/>
            <div class="cut cut-short"></div>
            <label for="date" className="placeholder">Date</label>
        </div>
        <button type="text" className="submit">submit</button>
        {submitted && (<p className="submit-success">Data submitted</p>)}
        </form>
    );
};

export default RegisterForm;
