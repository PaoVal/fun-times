import mg from "mongoose";
const {connect }  = mg;

export default async () => {
	try {
		return await connect (`${process.env.DB}`, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
	}
	catch (error){
		console.log(error);
	}
}