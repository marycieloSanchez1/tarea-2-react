import React from 'react';

const NavPage = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <nav className="d-flex justify-content-between align-items-center" aria-label="Page navigation">
            <p>Page: {currentPage}</p>
            <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={() => onPageChange(currentPage - 1)}>Previous</button>
                </li>
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={() => onPageChange(currentPage + 1)}>Next</button>
                </li>
            </ul>
        </nav>
    );
};

export default NavPage;


