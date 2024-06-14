import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Create() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        number: '',
        tugilganJoyi: '',
        millati: ''

    })
    const navigate = useNavigate();
    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:3000/users', values)
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err));
    }
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light ">
        <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
            <h1>Users Qo'shish</h1>
            <form onSubmit={handleSubmit} >
                <div className="mb-2">
                    <label htmlFor="name">Ism:</label>
                    <input type="text" name="name" className="form-control" placeholder="Ismingizni kiriting" 
                    onChange={e => setValues({...values, name: e.target.value})} />
                </div>
                <div className="mb-2">
                    <label htmlFor="name">Email:</label>
                    <input type="email" name="email" className="form-control" placeholder="Emailingizni kiriting" 
                    onChange={e => setValues({...values, email: e.target.value})} />
                </div>
                <div className="mb-3">
                    <label htmlFor="name">Telefon raqam:</label>
                    <input type="text" name="number" className="form-control" placeholder="Telefon raqamingizni kiriting" 
                    onChange={e => setValues({...values, number: e.target.value})} />
                </div>
                <div className="mb-3">
                    <label htmlFor="tugilganJoyi">Tug'ilgan joy:</label>
                    <input type="text" name="number" className="form-control" placeholder="Tug'ilgan joyingizni kiriting" 
                    onChange={e => setValues({...values, tugilganJoyi: e.target.value})} />
                </div>
                <div className="mb-3">
                    <label htmlFor="name">Millat:</label>
                    <input type="text" name="millati" className="form-control" placeholder="Millatingizni kiriting" 
                    onChange={e => setValues({...values, millati: e.target.value})} />
                </div>
                <button className="btn btn-success" >Saqlash</button>
                <Link to="/" className='btn btn-primary ms-3'>Chiqish</Link>
            </form>
        </div>
    </div>
  )
}

export default Create