// src/UserForm.tsx
import { useEffect, useState } from "react";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  Timestamp,
} from "firebase/firestore";

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

export default function UserForm() {
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
    await addDoc(collection(db, "users"), {
      ...formData,
      createdAt: Timestamp.now(),
    });
    alert("Data submitted successfully ✅");
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
  };

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
      const data = snapshot.docs.map((doc) => doc.data() as UserData);
      setUsers(data);
    });
    return () => unsub();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "auto" }}>
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
          <div key={name} style={{ marginBottom: "10px" }}>
            <label>{label}</label>
            <input
              type={type}
              name={name}
              value={(formData as any)[name]}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "6px" }}
            />
          </div>
        ))}
        <div style={{ marginBottom: "10px" }}>
          <label>Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "6px" }}
          />
        </div>
        <button type="submit" style={{ width: "100%", padding: "8px" }}>
          Submit
        </button>
      </form>

      <hr style={{ margin: "40px 0" }} />

      <h2 style={{ textAlign: "center" }}>Submitted Users</h2>
      <table border={1} cellPadding={10} style={{ width: "100%", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Father</th>
            <th>Email</th>
            <th>Age</th>
            <th>Qualification</th>
            <th>DOB</th>
            <th>CNIC</th>
            <th>Father CNIC</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <td>{user.name}</td>
              <td>{user.fatherName}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.qualification}</td>
              <td>{user.dob}</td>
              <td>{user.cnic}</td>
              <td>{user.fatherCnic}</td>
              <td>{user.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
