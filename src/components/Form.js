import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    admin: false,
  });
  
  
  function handleChange(event) {
    const name = event.target.name
    let value = event.target.value
    if (event.target.type === "checkbox") {
      value = event.target.checked
    }
    setFormData({
      ...formData,
      [name]: value,
    })
  }



  const [submittedData, setSubmittedData] = useState([])

  const [errors, setErrors] = useState([])

  // function handleFirstNameChange(event) {
  //   setFormData({
  //     ...formData,
  //     firstName: event.target.value
  //   });
  // }

  // function handleLastNameChange(event) {
  //   setFormData({
  //     ...formData,
  //     lastName: event.target.value
  //   });
  // }


  function handleSubmit(event){
    event.preventDefault()
    if (formData.firstName.length === 0) {
      setErrors(["First Name Required!"])
    } else if (formData.lastName.length === 0) {
      setErrors(["Last Name Required!"])
    } else {
      const dataArray = [...submittedData, formData]
      setSubmittedData(dataArray)
      setFormData({firstName:"", lastName:""})
      setErrors([])
    }
  }

  const listOfSubmissions = submittedData.map((data, index)=>{
    return(<div key={index}>
      {data.firstName} {data.lastName}
    </div>
    )
  })


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} name="firstName" value={formData.firstName} />
        <input type="text" onChange={handleChange} name="lastName" value={formData.lastName} />
        <button type="submit">Submit</button>
     </form>
     {errors.length > 0 ? errors.map((error, index)=>(
      <p key={index} style = {{color:"red"}}> {error} </p> )) : null}
      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  )
}

export default Form;
