import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getPeoplesList, searchPeoples } from '../../actions/peoples';

import PeoplesList from './PeoplesList';
import PlanetModal from './PlanetModal';
import Paging from '../common/Paging';
import TextFieldGroup from '../common/TextFieldGroup';

class DashboardPage extends Component {
  constructor(params) {
    super(params);
    this.state = {
      search: '',
      planet: {}
    }
    this.onChange = this.onChange.bind(this)
    this.changePage = this.changePage.bind(this)
    this.getPlanetDetail = this.getPlanetDetail.bind(this)
  }
  componentDidMount() {
    this.props.getPeoplesList();
  }

  changePage(number){
      if(this.state.search) return this.props.searchPeoples(this.state.search, number);

      this.props.getPeoplesList(number);
  }

  getPlanetDetail(url){
    this.setState({planet:{}});
    axios.get(url).then(res => {
      this.setState({planet: res.data});
    })
  }
  onChange(e){
     this.setState({[e.target.name]: e.target.value});

     this.props.searchPeoples(e.target.value);
  }
  
  render() {
    return (
      <div className="row">
      <PlanetModal planet={this.state.planet} />
        <div className="col-md-12 custyle">
          
          <div  className="col-md-4 col-md-offset-8">
            <TextFieldGroup
              label='Enter To Search From People'
              value={this.state.search}
              field="search"
              onChange={this.onChange}
            />
          </div>
          <PeoplesList peoples={this.props.peoples} getPlanetDetail={this.getPlanetDetail} />
          <Paging peoples={this.props.peoples} changePage={this.changePage}/>
        </div>
      </div>
    );
  }
}
DashboardPage.propTypes = {
  peoples: React.PropTypes.object.isRequired,
  getPeoplesList: React.PropTypes.func.isRequired,
  searchPeoples: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    peoples: state.peoples
  }
}

export default connect(mapStateToProps, { getPeoplesList, searchPeoples })(DashboardPage);
