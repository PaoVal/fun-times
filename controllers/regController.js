import bcrypt from "bcryptjs";

// import the schema's model. don't have that yet..... ?
// import schema, call it User
// import User from "../folder/file"

export function regController (req,res) {
	res.send("got @ reg");

}

export async function regPost (req,res) {
	// DON'T I NEED TO KNOW THE VAR NAMES THAT NAHIYAN IS USING??
	// provisionary:
	const { email, name, password } = req.body;

	// check if the user exists

	

		// if name exists, send a warning "Username is taken"

		// if email exists, send a warning "This email already has an account"


	// check if the password is "secure" enough 

	// number of chacaters

	// contains special characters

	//etc...


	// All information is good. Save it
	try {
		// hash and keep
		const pass = await bcrypt.hash(password, 10);

		// save all data to db 
		const newUser =
		new User({
		 	name: name,
		 	email: email,
		 	password: pass,
		});
		newUser.save();

		res.send("registered!")
	}
	// something went wrong oops my code sucks oops
	catch {
		res.send("whoopsie");
	}

}