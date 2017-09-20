import React from 'react';

const TableRow = ({ name, height, mass, created, edited, planet, getPlanetDetail }) => {
  return (
    <tr>
        <td>{name}</td>
        <td>{height}</td>
        <td>{mass}</td>
        <td>{created}</td>
        <td>{edited}</td>
        <td className="text-center">
            <a onClick={getPlanetDetail.bind(this, planet)} className="btn btn-info btn-xs" data-toggle="modal" data-target="#squarespaceModal">
                {planet}
            </a>
        </td>
    </tr>  );
}

TableRow.propTypes = {
    name: React.PropTypes.string.isRequired,
    height: React.PropTypes.string.isRequired,
    mass: React.PropTypes.string.isRequired,
    created: React.PropTypes.string.isRequired,
    edited: React.PropTypes.string.isRequired,
    planet: React.PropTypes.string.isRequired,
    getPlanetDetail: React.PropTypes.func.isRequired
}

export default TableRow;
