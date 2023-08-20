import React from 'react';

const Header = ({ selectedTeam, teamMemberCount }) => {
	return (
		<header className="container">
			<div className="row-justify-content-center mt-3 mb-4">
				<div className="col-8">
					<h4 className="mt-4 p5 bg-primary text-white rounded">
						Team Member Allocation
					</h4>
					<h5>
						{selectedTeam} has {teamMemberCount}{' '}
						{teamMemberCount === 1 ? 'members' : 'member'}
					</h5>
				</div>
				<hr />
			</div>
		</header>
	);
};

export default Header;
