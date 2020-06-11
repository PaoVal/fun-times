import mg from "mongoose";
import bcrypt from "bcryptjs";

const {Schema, model} = mg;

// sample of what this looks like
const PatientSchema = Schema({
	Name: String,
	Email: String,
	Password: String,
	Password2: String
});

// encrypt password
PatientSchema.pre("save", async function () {
	if(this.isModified("Password")) {
		this.Password = await bcrypt.hash(this.Password, 10);
	}
})

const Patient = model("Patient", PatientSchema);
export default Patient;