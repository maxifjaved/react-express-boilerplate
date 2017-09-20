import React, { Component } from 'react';
import classnames from 'classnames';

class Paging extends Component {
  constructor(params) {
    super(params);
    this.changePage = this.changePage.bind(this)
  }

  changePage(number){
      this.props.changePage(number);
  }

  
  render() {
    const { total, previous, current, next } = this.props.peoples[0] || {};
    console.log(total, previous, current, next);
    let pagesRef = [];
    for(let i=1; i <= total; i++){
        pagesRef.push(
            <li key={i} onClick={this.changePage.bind(this, i)} className={classnames({ 'active': current ==  i })}><a href="javascript:;">{ i }</a></li>
        );
    }
      
    return (
        <ul className="pagination">
            <li onClick={this.changePage.bind(this, previous)} className={classnames({ 'disabled': !previous })}><a href="javascript:;">«</a></li>
            {pagesRef}
            <li onClick={this.changePage.bind(this, next)} className={classnames({ 'disabled': !next })}><a href="javascript:;">»</a></li>
        </ul>

    );
  }
}
Paging.propTypes = {
    peoples: React.PropTypes.object.isRequired
}

export default Paging;
