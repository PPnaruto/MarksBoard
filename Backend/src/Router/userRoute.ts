import express from "express";
import {
  addStudent,
  deleteStudent,
  getStudentByID,
  getStudents,
} from "../Controller/User/student";
const router = express.Router();

// define the add student route
router.post("/student", addStudent);
// define the get students route
router.get("/students", getStudents);
// define the get student route by ID
router.get("/student/:id", getStudentByID);
// define the delete route for student
router.delete("/student/:id", deleteStudent);

export default router;
