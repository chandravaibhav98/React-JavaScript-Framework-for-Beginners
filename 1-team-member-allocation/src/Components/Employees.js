import { useState } from 'react';
import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';

const Employees = () => {
	const [selectedTeam, setSelectedTeam] = useState();

	function ChangeTeamSelection(event) {
		setSelectedTeam(event.target.value);
		console.log(event.target.value);
	}
	const [employees, setEmployees] = useState([
		{
			id: 1,
			fullName: 'Vaibhav Chandra',
			designation: 'Quality Engineer',
			gender: 'Male',
			teamName: 'TeamA',
		},
		{
			id: 2,
			fullName: 'Shubham Chandra',
			designation: 'Business Analyst',
			gender: 'Male',
			teamName: 'TeamB',
		},
		{
			id: 3,
			fullName: 'Shreya Kumar Chandra',
			designation: 'Analyst',
			gender: 'Female',
			teamName: 'TeamC',
		},
		{
			id: 4,
			fullName: 'Varad Karpe',
			designation: 'SDE',
			gender: 'Male',
			teamName: 'TeamA',
		},
		{
			id: 5,
			fullName: 'Ashutosh Kumar',
			designation: 'SDE',
			gender: 'Male',
			teamName: 'TeamB',
		},
		{
			id: 6,
			fullName: 'Raju Maharana',
			designation: 'QE',
			gender: 'Male',
			teamName: 'TeamC',
		},
		{
			id: 7,
			fullName: 'Mayank Paithiya',
			designation: 'SDE',
			gender: 'Male',
			teamName: 'TeamA',
		},
		{
			id: 8,
			fullName: 'Rekha Bhavani',
			designation: 'QE',
			gender: 'Female',
			teamName: 'TeamB',
		},
		{
			id: 9,
			fullName: 'Thomas Ranjan',
			designation: 'SDE',
			gender: 'Male',
			teamName: 'TeamC',
		},
		{
			id: 10,
			fullName: 'Rajeev Ranjan',
			designation: 'SDE',
			gender: 'Male',
			teamName: 'TeamC',
		},
	]);

	return (
		<main>
			<div className="container">
				<div className="row justify-content-center mt-3 mb-3">
					<h4>Employees</h4>
					<div className="col-4">
						<select
							className="form-select form-select-lg"
							value={selectedTeam}
							onChange={(e) => ChangeTeamSelection(e)}>
							<option value="TeamA">TeamA</option>
							<option value="TeamB">TeamB</option>
							<option value="TeamC">TeamC</option>
						</select>
					</div>
				</div>
				<div className="row justify-content-center mt-3 mb-3">
					<div className="col-4">
						<div className="card-collection">
							{employees.map((employee) => (
								<div
									id={employee.id}
									className="card m-2"
									style={{ cursor: 'pointer' }}>
									{employee.gender === 'male' ? (
										<img
											src={maleProfile}
											alt=""
											className="card-img-top"
										/>
									) : (
										<img
											src={femaleProfile}
											alt=""
											className="card-img-top"
										/>
									)}
									<div className="card-body">
										<h5
											className="card-title"
											label="fullName">
											{employee.fullName}
										</h5>
										<p
											className="card-text"
											label="Designation">
											<b>{employee.designation}</b>
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<hr />
		</main>
	);
};

export default Employees;
