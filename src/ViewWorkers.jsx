import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ViewWorkers() {
    const nav = useNavigate()
      const [employees, setEmployees] = useState([]);
        const [loading, setLoading] = useState(true); // 👈 loading state


     useEffect(() => {
    setLoading(true); // start loading
    axios.get("https://6a7aab0d8c69b3eb4a175f37.mockapi.io/workersupdates")
      .then((res)=>{
        console.log(res.data)
        setEmployees(res.data)
        setLoading(false); // stop loading
      })


      .catch((err) =>{
         console.error("Error fetching data:", err)
         setLoading(false);
      } );
  }, []);

  const addEmployee = (newEmp) => {
    setEmployees([...employees, newEmp]);
  };

  const deleteEmployee = (id) => {
     if (window.confirm("Are you sure you want to delete this employee?")) {
    axios.delete(`https://6a7aab0d8c69b3eb4a175f37.mockapi.io/workersupdates/${id}`)
      .then(() => {
        setEmployees(employees.filter((emp) => emp.id !== id));
        alert("Employee deleted successfully");
      }).catch(() => alert("Error deleting employee"));
  }
  };
 
    return ( 
        <div>
            <div className="container my-5">
  <div className="card shadow-lg border-0 rounded-4">
    <div className="card-header text-dark text-center py-3 d-flex justify-content-evenly">
      <h2 className="mb-0 mt-3 text-light">Employee Data</h2>
      <a href="/">
        <button type="button" className="btn btn-light btn-sm mt-3">
          Add Employee
        </button>
      </a>
    </div>

    <div className="card-body">
      {loading ? ( // 👈 conditional rendering
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3">Fetching employee data...</p>
            </div>
          ) : (
      <div className="table-responsive">
        <table className="table table-striped table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Location</th>
              <th>Workingdate</th>
              <th>Employeetype</th>
              <th>Projectname</th>
              <th>Salary</th>
              <th>Actions</th>
              
            </tr>
          </thead>
          <tbody>
  {employees.map((emp) => (
    <tr key={emp.id}>
      <td>{emp.id}</td>
      <td>{emp.name}</td> {/* match form field */}
      <td>{emp.phone ? `+91 ${emp.phone}` : `${emp.phone}`}</td>
      <td>{emp.location}</td>
      <td>{new Date(emp.workingdate).toLocaleDateString("en-GB")}</td>
      <td>{emp.employeetype}</td>
      <td>{emp.projectname}</td>
      <td>₹{emp.salary}</td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => deleteEmployee(emp.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  ))}
</tbody>

        </table>
      </div>
          )}
    </div>
  </div>
</div>

        </div>
     );
}

export default ViewWorkers;