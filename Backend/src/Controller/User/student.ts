import { AppDataSource } from "../../Database/db";
import { Student } from "../../Model/student";
import { Request, Response } from "express";

const userRepository = AppDataSource.getRepository(Student);

const addStudent = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const user = await userRepository.create(userData);
    const results = await userRepository.save(user);
    res.send(results);
  } catch (error: any) {
    console.log("Error while adding student", error);
  }
};

const getStudents = async (req: Request, res: Response) => {
  try {
    const users = await userRepository.find();
    res.json(users);
  } catch (error) {
    console.log("Error while getting student", error);
  }
};

const getStudentByID = async (req: Request, res: Response) => {
  try {
    const results = await userRepository.findOneBy({
      id: Number(req.params.id),
    });
    res.send(results);
  } catch (error) {
    console.log("Error while getting student by ID", error);
  }
};

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const results = await userRepository.delete(req.params.id);
    res.send(results);
  } catch (error) {
    console.log("Error while deleting Student:", error);
  }
};

export { addStudent, getStudents, getStudentByID, deleteStudent };
