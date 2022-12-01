import React from 'react';
import '../css/SearchTodoForm.css';

const SearchTodoForm = ({ handleSearching, setSearchText, searchText, searchData }) => {
	return (
		<>
			<form onSubmit={handleSearching} className='form-search-todo'>
				<label className='search-box'>Search box</label>
				<input
					type='text'
					className='search-input'
					placeholder='Find what...?'
					value={searchText}
					onChange={(e) => {
						setSearchText(e.target.value)
						handleSearching()
					}}
					title='Input the things that you are searching'
				>
				</input>
				<button
					type='submit'
					className='btn btn-search'
					title='Search it'
				>
					Search
				</button>
			</form>
			<div className='search-result'>
				{(searchText && searchText.length > 0) && (searchData.length > 0 ? `There are: ${searchData.length} results in the List!` : 'Not found')}
			</div>
		</>
	);
};

export default SearchTodoForm;
