import { useState } from 'react';
import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';
import Teams from './Teams';

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
						<Teams
							selectedTeam={selectedTeam}
							ChangeTeamSelection={ChangeTeamSelection}
						/>
					</div>
				</div>
				<div className="row justify-content-center mt-3 mb-3">
					<div className="col-4">
						<div className="card-collection">
							{employees.map((employee) => (
								<div
									key={employee.id}
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
