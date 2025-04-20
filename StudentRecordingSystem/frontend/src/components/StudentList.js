import React from "react";

const StudentList = ({ students, deleteStudent }) => {
    return ( <
        div >
        <
        h3 className = "mb-3" > Student List < /h3> {
            students.length === 0 ? ( <
                p className = "text-muted" > No students added yet. < /p>
            ) : ( <
                ul className = "list-group" > {
                    students.map((student) => ( <
                        li key = { student.id }
                        className = "list-group-item d-flex align-items-center justify-content-between" >
                        <
                        div className = "d-flex align-items-center" > {
                            student.image && ( <
                                img src = { `http://localhost:5000${student.image}` }
                                alt = "Student"
                                width = "50"
                                height = "50"
                                className = "rounded-circle me-3"
                                style = {
                                    { objectFit: "cover" } }
                                />
                            )
                        } <
                        div >
                        <
                        strong > { student.name } < /strong> <br / >
                        <
                        small className = "text-muted" > { student.course } < /small> <
                        /div> <
                        /div> <
                        button className = "btn btn-sm btn-danger"
                        onClick = {
                            () => deleteStudent(student.id) } >
                        Delete <
                        /button> <
                        /li>
                    ))
                } <
                /ul>
            )
        } <
        /div>
    );
};

export default StudentList;