import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads, deleteLead } from '../../actions/leads';
import { getDiscussions } from '../../actions/discussions';
import { getPosts } from '../../actions/posts';
import { getUser, fetchToken } from '../../actions/user';


export class Leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    getDiscussions: PropTypes.func.isRequired,
    deleteLead: PropTypes.func.isRequired,
  };
  
  componentWillMount(){
    this.props.fetchToken('blockresna','Mu12345678.');

  }

  componentDidMount() {
     this.props.getLeads();
      this.props.getDiscussions();
      this.props.getPosts();
      this.props.getUser();
   
  }

  render() {
    return (
      <Fragment>
        <h2>Leads</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.leads.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.message}</td>
                <td>
                  <button
                    onClick={this.props.deleteLead.bind(this, lead.id)}
                    className="btn btn-danger btn-sm"
                  >
                    {' '}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  leads: state.leads.leads,
});

export default connect(mapStateToProps, {
   getLeads,getDiscussions,getPosts, getUser, deleteLead,fetchToken
   })(Leads);
