import axios from 'axios';  
import { useNavigate, useParams  } from "react-router-dom";
import React, { useState, useEffect } from 'react'  

function Edit(){
    let history = useNavigate();
    const { id } = useParams();

    const [labour,setLabour]=useState({
        id:"",
        first_name:"",
        middle_name:"",
        last_name:"",
        contact:"",
        address:"",
        state:"",
        dob:"",
        gender:"",
        emergency_contact:""
    })

    useEffect(()=>{
        loadUsers();
    },[])
    const {first_name,middle_name,last_name,contact,address,state,dob,gender,emergency_contact} = labour;

    const handleChange=(e)=>{
        setLabour({...labour,[e.target.name]: e.target.value })
    }

    const updateForm = async (e)=>{
        e.preventDefault();
        console.log(labour);

        await axios.post("http://localhost/sgp-sem5/update_labour.php",labour)
        .then((result)=>{
            console.log(result);
            if(result.data.status=='valid'){
                history(`/list_labour`);
            }
            else{
                alert();
            }
        });
    }   

    const loadUsers = async ()=>{
        console.log('AA'+id)
        const result = await axios.get("http://localhost/sgp-sem5/edit_labour.php?id="+id);
        setLabour(result.data);
    }

    return(

        <form onSubmit={e => updateForm(e)}>
            <div className="box_size">
            <div class="row">
                <div className="col-md-12">Name</div>
                <div className="col-md-4">
                    <input type="text" className="form-control" name="first_name" 
                    value={first_name} onChange={e => handleChange(e)}/>
                </div>
                <div className="col-md-4">
                    <input type="text" className="form-control" name="middle_name"
                    value={middle_name} onChange={e => handleChange(e)}/>
                </div>
                <div className="col-md-4">
                    <input type="text" className="form-control" name="last_name"
                    value={last_name} onChange={e => handleChange(e)}/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">Contact Number</div>
                <div className="col-md-3">
                    <input type="tel" className="form-control" name="contact"
                    value={contact} onChange={e => handleChange(e)}/>
                </div>
                <div className="col-md-6">
                    <label for="gender">Gender </label>
                    <select name="gender" id="gender" value={gender} onChange={e => handleChange(e)}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">Address</div>
                <div className="col-md-8">
                    <input type="text" className="form-control" name="address"
                    value={address} onChange={e => handleChange(e)}/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">State</div>
                <div className="col-md-3">
                    <input type="text" className="form-control" name="state"
                    value={state} onChange={e => handleChange(e)}/>
                </div>
            </div>
            
            <div className="row">
                <div className="col-md-6">Date of Birth</div>
                <div className="col-md-6">
                    <input type="date" className="form-control" name="dob"
                    value={dob} onChange={e => handleChange(e)}/>
                </div>
            </div>

            <div class="row">
                <div className="col-md-4">Emergency Contact Number</div>
                <div className="col-md-4">
                    <input type="tel" className="form-control" name="emergency_contact"
                    value={emergency_contact} onChange={e => handleChange(e)}/>
                </div>
            </div>

            <button type="submit" class="btn btn-primary">Save</button>
            </div>
        </form>
    )
}

export default Edit;