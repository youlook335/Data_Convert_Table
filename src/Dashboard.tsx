import { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import "./Dashboard.css"; // 👈 CSS file import

type UserData = {
  name: string;
  fatherName: string;
  email: string;
  age: number;
  qualification: string;
  dob: string;
  cnic: string;
  fatherCnic: string;
  address: string;
  createdAt?: Timestamp;
};

export default function Dashboard() {
  const [formData, setFormData] = useState<UserData>({
    name: "",
    fatherName: "",
    email: "",
    age: 0,
    qualification: "",
    dob: "",
    cnic: "",
    fatherCnic: "",
    address: "",
  });

  const [users, setUsers] = useState<UserData[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newUser = { ...formData, createdAt: Timestamp.now() };
    try {
      await addDoc(collection(db, "users"), newUser);
      alert("✅ Submitted!");
      setUsers([newUser]);
      setFormData({
        name: "",
        fatherName: "",
        email: "",
        age: 0,
        qualification: "",
        dob: "",
        cnic: "",
        fatherCnic: "",
        address: "",
      });
    } catch (err) {
      alert("❌ Error saving data");
      console.error(err);
    }
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">📝 User Form + 📋 Table</h1>
      <div className="dashboard-container">
        <div className="form-box">
          <h2>Fill Details</h2>
          <form onSubmit={handleSubmit}>
            {[
              { label: "Name", name: "name" },
              { label: "Father Name", name: "fatherName" },
              { label: "Email", name: "email", type: "email" },
              { label: "Age", name: "age", type: "number" },
              { label: "Qualification", name: "qualification" },
              { label: "DOB", name: "dob", type: "date" },
              { label: "CNIC", name: "cnic" },
              { label: "Father CNIC", name: "fatherCnic" },
            ].map(({ label, name, type = "text" }) => (
                  <div className="form-group" key={name}>
                    <label>{label}</label>
                    <input
                      type={type}
                      name={name}
                      value={(formData as any)[name]}
                      onChange={handleChange}
                      required
                    />
                  </div>
                ))}
            <div className="form-group">
              <label>Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>

        {/* Submitted Data List */}
        <div className="table-box">
          <h2>Submitted Data</h2>
          {users.length > 0 ? (
            users.map((user, i) => (
              <div key={i} className="user-card">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Father Name:</strong> {user.fatherName}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Age:</strong> {user.age}</p>
                <p><strong>Qualification:</strong> {user.qualification}</p>
                <p><strong>DOB:</strong> {user.dob}</p>
                <p><strong>CNIC:</strong> {user.cnic}</p>
                <p><strong>Father CNIC:</strong> {user.fatherCnic}</p>
              </div>
            ))
          ) : (
            <p style={{ color: "#888" }}>No data submitted yet.</p>
          )}
        </div>

      </div>
    </div>
  );
}
