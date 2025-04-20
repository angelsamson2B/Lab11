import React, { useState } from "react";
import axios from "axios";

const StudentForm = ({ addStudent }) => {
        const [name, setName] = useState("");
        const [course, setCourse] = useState("");
        const [image, setImage] = useState(null);
        const [message, setMessage] = useState("");

        const handleSubmit = async(e) => {
            e.preventDefault();
            if (!name || !course) {
                setMessage("Please fill in all fields.");
                return;
            }

            const formData = new FormData();
            formData.append("name", name);
            formData.append("course", course);
            if (image) formData.append("image", image);

            await addStudent(formData);
            setName("");
            setCourse("");
            setImage(null);
            setMessage("✅ Student added successfully!");
        };

        return ( <
            div >
            <
            h3 className = "mb-3" > Add New Student < /h3> <
            form onSubmit = { handleSubmit } >
            <
            div className = "form-group mb-3" >
            <
            input type = "text"
            className = "form-control"
            placeholder = "Student Name"
            value = { name }
            onChange = {
                (e) => setName(e.target.value) }
            /> <
            /div> <
            div className = "form-group mb-3" >
            <
            input type = "text"
            className = "form-control"
            placeholder = "Course"
            value = { course }
            onChange = {
                (e) => setCourse(e.target.value) }
            /> <
            /div> <
            div className = "form-group mb-3" >
            <
            input type = "file"
            className = "form-control"
            onChange = {
                (e) => setImage(e.target.files[0]) }
            /> <
            /div> <
            button type = "submit"
            className = "btn btn-primary w-100" >
            Add Student <
            /button> {
                message && < div className = "alert alert-success mt-3" > { message } < /div>} <
                    /form> <
                    /div>
            );
        };

        export default StudentForm;