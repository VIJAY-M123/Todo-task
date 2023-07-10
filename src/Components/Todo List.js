import React,{useEffect, useState} from 'react';
import { Table, Row, Col, Card, CardHeader, CardBody, Button,Modal,ModalHeader,ModalBody } from "reactstrap";
import Form from "./Form";
import "./Styles/Login.css";




export default function TodoList() {
  const[TableData, setTableData]=useState([]);


  console.log("TableData", TableData);

  const [Open, setOpen] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);

  console.log("SeletdItem",selectedItem);

  const AddClick = () => {
  setOpen(true)
  }

  const fetchData = async () => {
    
    try {
      const response = await fetch('https://crudcrud.com/api/200a4df80608406b8d0d579d76453632/emp', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json; charset=utf-8"
      },
      });
  
   
      if (response) {
       
        const responseData = await response.json();
         setTableData(responseData);
         //setTableData(response.data);
        console.log('Data fetched successfully:', responseData);
      } else {
       
        console.error('Error fetching data:', response.status);
        
      }
    } catch (error) {
   
      console.error('Error fetching data:', error);
    }
  };

  
  
 

  const DeleteClick = async (item) => {
    console.log("Delete",item._id);
    try {
      await fetch(`https://crudcrud.com/api/200a4df80608406b8d0d579d76453632/emp/${item._id}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json; charset=utf-8"
      },
      
      });
      
      const newData = TableData.filter((items) => items._id !== item._id);
      setTableData(newData);
    } catch (error) {
      
      console.error('Error deleting item:', error);
    }
  };

  const EditClick = (item) => {
    setSelectedItem(item);
    setOpen(true);
  }

  const handleSubmit = () => {
   
    setOpen(false);
  };
  return (
    <div className='p-3' style={{backgroundColor:"aliceblue"}}>


      <Modal
        isOpen={Open}
        toggle={() => setOpen(!Open)}>
        <ModalHeader
          toggle={() => setOpen(!Open)}
        >
          Todo
        </ModalHeader>
        <ModalBody>
          <Form handleSubmit={handleSubmit} selectedItem = {selectedItem} fetchData={fetchData} />
        </ModalBody>
      </Modal>

      <Row className="mt-2">
        <Col className='d-flex justify-content-center'>
          <Card className="" style={{
            boxShadow: "", backgroundColor: "", height: "440px",
            border: "0px",width:"70%"

          }}>
            <CardHeader className="border-0"
              style={{
                backgroundColor: "#1d2766",

                border: "0px"
              }}>
              <Row className="align-items-center">

                <Col lg={10}>
                  <h5 className='text-white'>My Todo</h5>
                </Col>

                <Col lg={2} className="d-flex align-items-end">
                  <Button className="btnAdd" onClick={AddClick}>Add Todo</Button>
                </Col>

              </Row>


            </CardHeader>
            <Table className="" responsive >
              <thead className="">
                <tr className="" style={{ color: "#7dbf57", backgroundColor: "" }}>
                  <th scope="col">Emp_id</th>
                  <th scope="col">Emp_Name</th>
                  <th scope="col">Emp_Dept</th>
                  <th scope="col">Emp_Phone</th>

                  <th scope="col">Action</th>
                </tr>
              </thead>
              {TableData.map((item, index) => (
                <tbody  >
                  <tr key={index} className="" style={{
                    
                    backgroundColor: "#e0e0e0"
                  }}>
                    <td>{item.Emp_id}</td>
                    <td >{item.Emp_Name}</td>
                    <td >{item.Emp_Dept}</td>
                    <td>{item.Emp_Phone}</td>


                    <td><Button className="Update" onClick={()=>EditClick(item)}>Update</Button>
                      <Button className="Delete" onClick={()=>DeleteClick(item)}>Delete</Button></td>

                  </tr>
                </tbody>
              ))}
            </Table>
          </Card>
        </Col>
      </Row>
      
    </div>
  )
}

