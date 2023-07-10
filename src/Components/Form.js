import React, { useState, useEffect } from "react";
import { CardBody, Col, Card, CardHeader, Row, Button } from "reactstrap";


export default function From({ handleSubmit, selectedItem, fetchData }) {
  //console.log("SelectedPerson", phone);
  const [Data, setData] = useState({
    Emp_id: "",
    Emp_Name: "",
    Emp_Dept: "",
    Emp_Phone: "",


  })
  useEffect(() => {
    if (selectedItem) {
      setData({
        Emp_id: selectedItem.Emp_id,
        Emp_Name: selectedItem.Emp_Name,
        Emp_Dept: selectedItem.Emp_Dept,
        Emp_Phone: selectedItem.Emp_Phone,
      });
    }
  }, [selectedItem]);

  //console.log("D", Data);
  const Handle = (e) => {

    setData({ ...Data, [e.target.name]: e.target.value })

  }
  // const Submit = (e) => {
  //     e.preventDefault();
  //     handleSubmit(Data);

  //     fetch("https://crudcrud.com/api/c5edb409cc914ae592c251200915615c/todo",
  //         {
  //             method: "POST",
  //             headers: {
  //                 "Content-Type": "application/json; charset=utf-8"
  //             },
  //             body: JSON.stringify({

  //                 Emp_id: Data.Emp_id,
  //                 Emp_Name: Data.Emp_Name,
  //                 Emp_Dept: Data.Emp_Dept,
  //                 Emp_Phone: Data.Emp_Phone,
  //             })
  //         })

  //     setData({
  //         Emp_id: "",
  //         Emp_Name: "",
  //         Emp_Dept: "",
  //         Emp_Phone: "",


  //     });

  // }

  const Submit = (e) => {
    e.preventDefault();
    handleSubmit(Data);

    const apiUrl = selectedItem
      ? `https://crudcrud.com/api/200a4df80608406b8d0d579d76453632/emp/${selectedItem._id}`
      : "https://crudcrud.com/api/200a4df80608406b8d0d579d76453632/emp";

    const method = selectedItem ? "PUT" : "POST";

    fetch(apiUrl,
      {
        method: method,
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
          Emp_id: Data.Emp_id,
          Emp_Name: Data.Emp_Name,
          Emp_Dept: Data.Emp_Dept,
          Emp_Phone: Data.Emp_Phone
        })
      }
    )
    

    fetchData();

    setData({
      Emp_id: "",
      Emp_Name: "",
      Emp_Dept: "",
      Emp_Phone: ""
    });



  };





  return (
    <div>


      <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

        <input className="mt-2" type="text"
          placeholder="Emp_id"
          name="Emp_id"
          value={Data.Emp_id}
          onChange={Handle} />

        <input className="mt-2" type="text"
          placeholder="Emp_Name"
          name="Emp_Name"
          value={Data.Emp_Name}
          onChange={Handle} />

        <input className="mt-2" type="text"
          placeholder="Emp_Dept"
          name="Emp_Dept"
          value={Data.Emp_Dept}
          onChange={Handle} />


        <input className="mt-2"
          type="tel"
          placeholder="Emp_Phone"
          name="Emp_Phone"
          value={Data.Emp_Phone}
          onChange={Handle}

        />




        <Button className="mt-2" onClick={Submit}>Submit</Button>
      </form>

    </div>
  )
}