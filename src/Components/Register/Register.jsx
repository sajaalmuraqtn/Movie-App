import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'

export default function Register() {

    let [errors,setErrors]=useState([]);

    let formik = useFormik(
        {
            initialValues: {
                email: ' ',
                name: '',
                password: '',
                cPassword: ' '
            }
            ,
            onSubmit: register
        }
    )

    async function register(values){
        let { data } = await axios.post('https://lazy-blue-sockeye-gear.cyclic.app/api/v1/auth/signup', values);
        if (data.message==='success') {
            console.log('regesterd');
            
        } else {
            setErrors(data.err[0]);
        }
    }



    //    useEffect(()=>{
    //     register()
    //    },[])

    return (
        <div className='container py-5'>
            {
                errors.map((error)=>{
                    return <div className="alert alert-danger">
                       {error.message}
                    </div>
                })
            }
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <div className="mb-5">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" onChange={formik.handleChange} value={formik.values.email} name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="exampleInputName" className="form-label">Name</label>
                        <input type="text" onChange={formik.handleChange} value={formik.values.name} name='name' className="form-control" id="exampleInputName" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name='password' onChange={formik.handleChange} value={formik.values.password} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="exampleInputConfirmPassword1" className="form-label">Confirm Password</label>
                        <input type="password" name='cPassword' onChange={formik.handleChange} value={formik.values.cPassword} className="form-control" id="exampleInputConfirmPassword1" />
                    </div>

                    <button type="submit" className="btn btn-primary">Register</button>
                </div>

            </form>
        </div>
    )
}
