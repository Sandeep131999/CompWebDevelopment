import React,{useState} from "react"

function Sandeep(){
    const [contact, setContact] = useState({
        fname: "",
        lname: "",
        email: ""
    });
    function handleChange(event){
        const {name, value} = event.target;
        setContact(prevValue =>{
            if(name==="fname"){
                return {
                    fname: value,
                    lname: prevValue.lname,
                    email: prevValue.email
                  };
            }else if(name==="lname"){
                return{
                    lname: value,
                    fname: prevValue.fname,
                    email: prevValue.email
                };
            }else if(name==="email"){
                return{
                    email: value,
                    fname: prevValue.fname,
                    lname: prevValue.lname
                };
            }
        });    
    }

    return(
        <div class= "container">
            <form>
                <h1>{contact.fname} {contact.lname}</h1>
                <p>{contact.email}</p>
                <input
                    type="text"
                    onChange={handleChange}
                    name="fname"
                    placeholder="First name"
                    value={contact.fname}
                />
                <input
                    type="text"
                    onChange={handleChange}
                    name="lname"
                    value={contact.lname}
                    placeholder="Last name"
                />
                <input
                    type="email"
                    onChange={handleChange}
                    name="email"
                    value={contact.email}
                    placeholder="Email Id"
                />

                <button>submit</button>
            </form>
        </div>  
    )
}
export default Sandeep