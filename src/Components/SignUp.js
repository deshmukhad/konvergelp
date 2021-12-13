import React, { useContext } from 'react';
import { Grid, makeStyles, Paper } from '@material-ui/core';
import { menuContext } from './GenContext';
import Controls from './Controls';
import { UserForms } from './UserForms';
import axios from 'axios';
import cookies from 'js-cookies';
import jwt from 'jsonwebtoken';

const useStyle = makeStyles((theme) => ({
	mainClass: {
		margin: theme.spacing(5),
		height: theme.spacing(60),
		width: theme.spacing(50),
		alignment: 'center',
		flexDirection: 'column'
	}
}));

const initialValues = {
	userEmail: '',
	pwd: '',
	cpwd: '',
	mobileNo: '',
	userName: ''
};

function SignUp() {
	const classes = useStyle();

	//const {menuopt, setMenuopt} = props
	const [ menuopt, setMenuopt ] = useContext(menuContext);
	const { values, errors, setErrors, handleInputChange, setValues } = UserForms(initialValues);

	// const [value, setValue] = useState('user');

	const handleCreateNewUser = async (event) => {
		event.preventDefault();

		if (!validData()) {
			return;
		}

		if (menuopt === 15) {
			try {
				const response = await axios.post(`http://192.168.0.105:8081/adduser`, {
					params: {
						useremail: values.userEmail,
						username: values.userName,
						mobileno: values.mobileNo,
						pwd: values.pwd
					}
				});

				//alert(response.data)
				alert('User Created');
				setMenuopt(0);
			} catch (e) {
				alert('Invalid Request ');
				setMenuopt(15);
			}
		}
		if (menuopt === 21) {
			const token = cookies.getItem('token');
			alert(token);
			/* const decode = jwt.verify(token, 'KonvergeToken');
			const userid = decode.userid; */

			try {
				const response = await axios.put(`http://192.168.0.105:8081/updateuser`,
					{
						params: {
							useremail: values.userEmail,
							username: values.userName,
							mobileno: values.mobileNo,
							pwd: values.pwd
						}
					},
					{
						headers: {
							Authorization: `Bearer ${token}`
						}
					}
				);
				//console.log("HI HI")
				// console.log(response.statusText)

				alert('Updated Successfully');
				setMenuopt(1);
			} catch (e) {
				alert('Unable to Update');
			}
		}

		// alert("Sign up Clicked")
		// setMenuopt(0)
	};

	const validData = () => {
		const temp = {};
		temp.userName = values.userName ? '' : 'Username Required';
		temp.userEmail = values.userEmail ? '' : 'Useremail Required';
		temp.pwd = values.pwd ? '' : 'Password is required';
		temp.mobileNo = /^\d{10}$/.test(values.mobileNo) ? '' : 'Minimum 10 digits required';
		temp.userEmail = /$^|.+@.+..+/.test(values.userEmail) ? '' : 'Email Invalid';
		temp.cpwd = values.pwd ? '' : 'Mismatch';

		setErrors({ ...temp });
		//?
		return Object.values(temp).every((x) => x === '');
	};

	return (
		<Grid align="center">
			<Paper elevation={12} className={classes.mainClass}>
				<div>
					<Grid container spacing={2} alignItems="center" direction="column">
						<Grid item>
							<h2>Sign Up Page</h2>
						</Grid>
						<Grid item>
							<Controls.Input
								name="userName"
								label="User Name"
								value={values.userName}
								onChange={handleInputChange}
								type="text"
								size="small"
								style={{ width: 300 }}
								error={errors.userName}
								required
							/>
						</Grid>
						<Grid item>
							<Controls.Input
								name="userEmail"
								label="Email Id"
								value={values.userEmail}
								onChange={handleInputChange}
								type="email"
								required
								size="small"
								style={{ width: 300 }}
								error={errors.userEmail}
							/>
						</Grid>
						<Grid item>
							<Controls.Input
								name="mobileNo"
								label="Mobile Number"
								value={values.mobileNo}
								onChange={handleInputChange}
								type="text"
								required
								size="small"
								style={{ width: 300 }}
								error={errors.mobileNo}
							/>
						</Grid>
						<Grid item>
							<Controls.Input
								name="pwd"
								label="Password"
								value={values.pwd}
								onChange={handleInputChange}
								type="password"
								required
								size="small"
								style={{ width: 300 }}
								error={errors.pwd}
							/>
						</Grid>

						<Grid item>
							<Controls.Input
								name="cpwd"
								label="Confirm Password"
								value={values.cpwd}
								onChange={handleInputChange}
								type="password"
								required
								size="small"
								style={{ width: 300 }}
								error={errors.cpwd}
							/>
						</Grid>

						<Grid item>
							<Controls.Button onClick={handleCreateNewUser} color="secondary" text="Sign Up" />
						</Grid>
					</Grid>
				</div>
			</Paper>
		</Grid>
	);
}

export default SignUp;
