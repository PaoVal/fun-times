import patients from "../models/Patient.js";
import {regValidate} from "../validation.js";

export function regController (req,res) {
	res.send("got @ reg");

}

export async function regPost (req,res) {
	// DON'T I NEED TO KNOW THE VAR NAMES THAT NAHIYAN IS USING??
	// provisionary:
	const { Name, Email, Password1, Password2} = req.body;	

	try {
		// joi validation (checks for a lot of errors)
		const err = regValidate(req.body);
		if(err) throw err;

		console.log("check1");
		// check that pass1 == pass2 
		if (Password1 !== Password2) throw "The passwords don't match";

		console.log("check2");
		// checks if the email is already associated with an account
		const patient = await patients.findOne({Email});
		if (patient) throw "This email is already in use";

		// check if username is repeated
		const patient = await patients.findOne({Name});
		if (patient) throw "This username is already in use";

		console.log("check3");
		// All information is good. Save it to db 
		const newPatient =
		await new patients({Name, Email, Password1}).save();

		res.send("registered!")
	}
	// something went wrong, send an error message
	catch (e) {
		res.status(400).send(e);
	}
}