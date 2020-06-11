import Patient from "../models/Patient.js";

export function regController (req,res) {
	res.send("got @ reg");

}

export async function regPost (req,res) {
	// DON'T I NEED TO KNOW THE VAR NAMES THAT NAHIYAN IS USING??
	// provisionary:
	const { Name, Email, Password1, Password2} = req.body;

	try {
		// checks if the email is already associated with an account
		const patient = await Patient.findOne({Email});
		if (patient) throw "This email is already in use";

		console.log("check1");
		// check that pass1 == pass2
		if (Password1 !== Password2) throw "The passwords don't match";

		console.log("check2");
		// check if the password is "secure" enough 

		// is it long enough?
		const MINCHAR = 5; //ask about this
		if (Password1.length < MINCHAR) throw `Password must contain at least ${MINCHAR} characters`;

		console.log("check2.1");

		// are all fields filled in?
		if (!Name || !Email || !Password1){
			throw "You must fill in all fields";
		}

		console.log("check2.2");
		// is there at least NUM numbers in the password?
		const MINNUM = 2; //ask about this
		let nums = 0;
		for (let i = 0; i <Password1.length; i++) {
			if (!isNaN(Password1.charAt(i))) {
				nums++;
				console.log(Password1.charAt(i));
			}
		}
		if (nums < MINNUM) throw "Password must contain at least 2 numbers"

		// can't think of more checks....



		console.log("check3");
		// All information is good. Save it to db 
		const newPatient =
		await new Patient({Name, Email, Password1}).save();

		console.log("check4");
		res.send("registered!")
		console.log(newPatient);
	}
	// something went wrong, send an error message
	catch (e) {
		res.send(e);
	}
}