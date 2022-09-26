import React, {useState, useEffect } from "react";
import axios from "axios";

function TakeAttendance(){

    const [labour, setLabour ]=useState([]);
    

        useEffect(()=>{
            loadUsers();
            setLabour(
                labour.map(d => {
                    return {
                        select: d.select,
                        id: d.id,
                        first_name: d.first_name,
                        last_name: d.last_name,
                        contact: d.contact
                    };
                })
            );
        },
        []
        );

        const updateForm = async (e)=>{
            e.preventDefault();
            console.log(labour);
    
            await axios.post("http://localhost/sgp-sem5/attendance.php",labour)
            .then((result)=>{
                console.log(result);
                if(result.data.status==='valid'){
                    alert("Attendance taken")
                }
                else{
                    alert("Some error occured");
                }
            });
        }
        const loadUsers = async ()=>{
            const result = await axios.get("http://localhost/sgp-sem5/list_of_labours.php");
            
            let data=result.data.records;
            
            await data.map(ele=>{
                ele.select=false;
            })

            setLabour(result.data.records);
        }

        
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    return(
        <form onSubmit={e => updateForm(e)}>
                <div>
            <div className="App">
                <h3>Today's date {date}</h3>
            </div>
            <div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1>Attendance</h1>
                    </div>
                </div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">
                                SELECT ALL <input type="checkbox" 
                                onChange={event => {
                                    
                                    let checked = event.target.checked;
                                    setLabour(
                                        labour.map(d => {
                                            d.select = checked;
                                            d.date = date;
                                            return d;
                                        })
                                    );
                                }}
                                ></input>
                            </th>
                            <th scope="col">ID</th>
                            <th scope="col">NAME</th>
                            <th scope="col">CONTACT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {labour.map((d)=> (
                            <tr key={d.id}>
                                <th scope="row">
                                    <input
                                    onChange={event => {
                                        
                                        setLabour(
                                            labour.map(data => {
                                                data.date = date;
                                                if (d.id === data.id) {
                                                    data.select = event.target.checked;
                                                    
                                                }
                                                return data;
                                            })
                                        );
                                    }}
                                    type="checkbox"
                                    checked={d.select}
                                          
                                    ></input>
                                </th>
                                <td>{d.id}</td>
                                <td>{d.first_name+" "+d.last_name}</td>
                                <td>{d.contact}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
            </div>
            </div>
            <button type="submit" class="btn btn-primary">Save</button>
        </form>
        
    )
}

export default TakeAttendance;