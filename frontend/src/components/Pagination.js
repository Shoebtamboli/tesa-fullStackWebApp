import React, { Component } from 'react';

export class Pagination extends Component {
	render() {
		const { postsPerPage, totalPosts, paginate, nextPage, prevPage, currentPage } = this.props;

		const pageNumbers = [];

		for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
			pageNumbers.push(i);
		}
		console.log(pageNumbers);
		return (
			<div className="pagenumbers">
				<ul className="pagination justify-content-center">
					<li className={`${pageNumbers[0] === currentPage && 'disabled'}`}>
						<a className="page-link" href="/#" onClick={() => prevPage()}>
							{'<'}
						</a>
					</li>
					{pageNumbers.map((page) => (
						<li className={`${currentPage === page && 'active'}`} key={page}>
							<a onClick={() => paginate(page)} href="/#" className="page-link">
								{page}
							</a>
						</li>
					))}
					<li className={`${pageNumbers.reverse()[0] === currentPage && 'disabled'}`}>
						<a className="page-link" href="/#" onClick={() => nextPage()}>
							{'>'}
						</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default Pagination;
