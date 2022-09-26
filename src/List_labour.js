import React, {useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function List(){

    const [labour, setLabour ]=useState([]);

        useEffect(()=>{
            loadUsers();
        },
        []
        )

        const loadUsers = async ()=>{
            const result = await axios.get("http://localhost/sgp-sem5/list_of_labours.php");
            setLabour(result.data.records);
            //console.log(result)
        }
    return(
        
        <div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1>Labours List</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3"><b>ID</b></div>
                <div className="col-md-3"><b>NAME</b></div>
                <div className="col-md-3"><b>CONTACT</b></div>
                <div className="col-md-3"><b>ACTION</b></div>
            </div>
            {labour.map((labour) =>
            
            <div className="row">
                <div className="col-md-3">{labour.id}</div>
                <div className="col-md-3">{labour.first_name+" "+labour.last_name}</div>
                <div className="col-md-3">{labour.contact}</div>
                <div className="col-md-3">
                    <Link className="btn btn-success" to={`/Edit-labour/${labour.id}`}>EDIT</Link>
                </div>
            </div>
            )}
        </div>
    )
}

export default List;