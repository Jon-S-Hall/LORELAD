import React from 'react';

const List = (props) => {
    const { records } = props;
    if (!records || records.length === 0) return <p>No repos, sorry</p>;
    return (
        <ul>
            <h2 className='list-head'>Available Records</h2>
            {records.map((records) => {
                return (
                    <li key={records.id} className='list'>
                        <span className='repo-text'>{repo.name} </span>
                        <span className='repo-description'>{repo.description}</span>
                    </li>
                );
            })}
        </ul>
    );
};
export default List;