import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

const App = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async() => {
        const response = await axios.get("http://localhost:5000/api/students");
        setStudents(response.data);
    };

    const addStudent = async(formData) => {
        await axios.post("http://localhost:5000/api/students", formData);
        fetchStudents();
    };

    const deleteStudent = async(id) => {
        await axios.delete(`http://localhost:5000/api/students/${id}`);
        fetchStudents();
    };

    return ( <
        div className = "container mt-5" >
        <
        h1 className = "text-center mb-4" > 🎓Student Recording System < /h1> <
        div className = "row" >
        <
        div className = "col-md-6" >
        <
        StudentForm addStudent = { addStudent }
        /> <
        /div> <
        div className = "col-md-6" >
        <
        StudentList students = { students }
        deleteStudent = { deleteStudent }
        /> <
        /div> <
        /div> <
        /div>
    );
};

export default App;