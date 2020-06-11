import mg from "mongoose";
import bcrypt from "bcryptjs";

const {Schema, model} = mg;

// sample of what this looks like
const PatientSchema = Schema({
	Name: String,
	Email: String,
	Password1: String,
});

// encrypt password
PatientSchema.pre("save", async function () {
	if(this.isModified("Password1")) {
		this.Password1 = await bcrypt.hash(this.Password1, 10);
	}
})

const Patient = model("Patient", PatientSchema);
export default Patient;