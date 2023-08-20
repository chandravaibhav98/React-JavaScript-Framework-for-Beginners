import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, useEffect } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Employees from './Components/Employees';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GroupedTeamMembers from './Components/GroupedTeamMembers';
import Nav from './Components/Nav';
import NotFound from './Components/NotFound';

function App() {
	const [selectedTeam, setSelectedTeam] = useState(
		JSON.parse(localStorage.getItem('selectedTeam')) || 'TeamB',
	);

	const [employees, setEmployees] = useState(
		JSON.parse(localStorage.getItem('employeeList')) || [
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
		],
	);
	function ChangeTeamSelection(event) {
		setSelectedTeam(event.target.value);
		console.log(event.target.value);
	}

	function handleEmployeeCardClick(event) {
		const transformedEmployees = employees.map((employee) =>
			employee.id === parseInt(event.currentTarget.id)
				? employee.TeamName == selectedTeam
					? { employee, teamName: selectedTeam }
					: { ...employee, teamName: selectedTeam }
				: employee,
		);

		setEmployees(transformedEmployees);
	}

	useEffect(() => {
		localStorage.setItem('employeeList', JSON.stringify(employees));
	}, [employees]);

	useEffect(() => {
		localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));
	}, [selectedTeam]);

	return (
		<div className="App">
			<Router>
				<Nav />
				<Header
					selectedTeam={selectedTeam}
					teamMemberCount={
						employees.filter(
							(employee) => employee.teamName === selectedTeam,
						).length
					}
				/>
				<Routes>
					<Route
						path="/"
						element={
							<Employees
								employees={employees}
								selectedTeam={selectedTeam}
								handleEmployeeCardClick={
									handleEmployeeCardClick
								}
								ChangeTeamSelection={ChangeTeamSelection}
							/>
						}></Route>
					<Route
						path="/GroupedTeamMembers"
						element={<GroupedTeamMembers />}></Route>
					<Route
						path="*"
						element={<NotFound />}></Route>
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
