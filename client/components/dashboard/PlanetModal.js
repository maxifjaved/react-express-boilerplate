import React, { Component } from 'react';

class PlanetModal extends Component {
  render() {
    const {name, diameter, climate, population } =  this.props.planet;
    
    return (<div>
        <div className="modal fade" id="squarespaceModal" tabIndex={-1} role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
                <h3 className="modal-title" id="lineModalLabel">{name}</h3>
              </div>
              <div className="modal-body">
              <table className="table table-striped custab">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>diameter</th>
                    <th>Climate</th>
                    <th>Population</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{name}</td>
                    <td>{diameter}</td>
                    <td>{climate}</td>
                    <td>{population}</td>
                </tr>
                </tbody>
              </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

PlanetModal.propTypes = {
  planet: React.PropTypes.object.isRequired
}

export default PlanetModal;