import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Employeeform() {
     const nav = useNavigate();

  const [employeename, setEmployeename] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [workingdate, setWorkingdate] = useState("");
  const [employeetype, setEmployeetype] = useState("");
  const [projectname, setProjectname] = useState("");
  const [salary, setSalary] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://6a7aab0d8c69b3eb4a175f37.mockapi.io/workersupdates", {
        employeename,
        phone,
        location,
        workingdate,
        employeetype,
        projectname,
        salary,
      })
      .then(() => {
        alert("Employee added successfully");
        nav("/viewworkers");
      })
      .catch(() => {
        alert("Error in adding employee");
      });
  };
    return ( 
        <div>
           <div>
      <div className="container my-5">
        <div className="card shadow-lg border-0 rounded-4">
          <div className="card-header text-dark text-center py-3 d-flex justify-content-evenly">
            <h2 className="mb-0 text-light">Employee Details</h2>
            <a href="/viewworkers" class="btn btn-light btn-sm">View Workers</a>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit} className="w-75 mx-auto">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Employee Name</label>
                  <input
                    type="text"
                    className="form-control input-gradient"
                    value={employeename}
                    onChange={(e) => setEmployeename(e.target.value)}
                 required />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="text"
                    className="form-control input-gradient"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)} 
                    pattern="[6-9]{1}[0-9]{9}"   // only 10 digits starting 6–9
  title="Enter valid Indian mobile number"
                 required />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Location</label>
                  <input
                    type="text"
                    className="form-control input-gradient"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                required  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Working Date</label>
                  <input
                    type="date"
                    className="form-control input-gradient"
                    value={workingdate}
                    onChange={(e) => setWorkingdate(e.target.value)}
                 required />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Employee Type</label>
                  <select
                    className="form-select input-gradient"
                    value={employeetype}
                    onChange={(e) => setEmployeetype(e.target.value)}
                 required >
                    <option value="">Select Type</option>
                    <option value="Worker">Worker</option>
                    <option value="Sharing Partner">Sharing Partner</option>
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Project Name</label>
                  <input
                    type="text"
                    className="form-control input-gradient"
                    value={projectname}
                    onChange={(e) => setProjectname(e.target.value)}
                required  />
                </div>

                <div className="col-md-6 mb-3">
                <label className="form-label">Salary</label>
                <input
                  type="text"
                  className="form-control input-gradient"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
               required />
              </div>

              </div>

              <div className="text-center mt-4">
                <button type="submit" className="btn btn-gradient">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

        </div>
     );
}

export default Employeeform;