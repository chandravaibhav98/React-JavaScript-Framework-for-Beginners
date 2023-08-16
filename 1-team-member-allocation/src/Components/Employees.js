import { useState } from 'react';
import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';

const Employees = ({
	employees,
	selectedTeam,
	handleEmployeeCardClick,
	ChangeTeamSelection,
}) => {
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
									className={
										employee.teamName === selectedTeam
											? 'card m-2 standout'
											: 'card m-2'
									}
									style={{ cursor: 'pointer' }}
									onClick={handleEmployeeCardClick}>
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
