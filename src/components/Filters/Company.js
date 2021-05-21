import React from 'react';

export const Company = ({ updateFilters, company, companies }) => (
  <div className='form-control'>
    <h5>company</h5>
    <select
      name='company'
      value={company}
      onChange={updateFilters}
      className='company'
    >
      {companies.map((companiesItem, index) => (
        <option key={index} value={companiesItem}>
          {companiesItem}
        </option>
      ))}
    </select>
  </div>
);
