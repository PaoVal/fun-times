import {Schema, model} from "mongoose";

const PatientSchema = Schema({
	Name: String,
	Password: String,
	Email: String,
	Age: Number,
});

const Patient = model("Patient", PatientSchema);

export default Patient;