import React, { Component, Fragment } from 'react'
import Hero from '../layout/Hero';
import {connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { getSettings, deleteSetting, addSettings ,updateSetting} from '../../actions/settings';


export class Settings extends Component {

  state = {
    
    student: this.props.euser.userid,
    updatetime: '',
    phone: '',
    updatebysms:true,
    updatebyemail:false
  };

  currentSetting = {
    student: this.props.euser.userid,
    updatetime: this.props.settings ? this.props.settings.updatetime : '',
    phone: this.props.settings ? this.props.settings.phone : '',
    updatebysms:true,
    updatebyemail:false
  }

  static propTypes = {
    
  };

  onSubmit = (e) => {
    e.preventDefault();
    
    this.props.addSettings(this.state);
  };

  onUpdate = (e) => {
    e.preventDefault();
    
    this.props.updateSetting(this.props.settings.id,this.state, this.currentSetting);
    this.props.getSettings()
  };

  onDelete = (e) => {
    e.preventDefault();
    
    this.props.deleteSetting(this.props.settings.id)

  };


  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    componentDidMount(){
      this.props.getSettings()
    }



    render(){
        
        const euser = this.props.euser;
        return <Fragment>
            <Hero />
            
            <div class="container row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-12">
            { this.props.settings ?
              
              <div className={`card-body card-${this.props.theme}  text-${this.props.navtheme}`}>
            <h2 className="text-center">Current SMS Settings</h2>
            <form onSubmit={this.onDelete}>
              <div className="form-group">
                <label>Phone Number</label>
                { this.props.settings ?
                <h4 className={` border-${this.props.theme}  text-${this.props.navtheme}`}>{this.props.settings.phone}</h4>
                : 
                <h4 className={` border-${this.props.theme}  text-${this.props.navtheme}`}>Not set</h4>
                }
    
              </div>
              <div className="form-group">
                <label>Check time (min)</label>
                { this.props.settings ?
                <h4 className={` border-${this.props.theme}  text-${this.props.navtheme}`}>{this.props.settings.updatetime}</h4>
                : 
                <h4 className={` border-${this.props.theme}  text-${this.props.navtheme}`}>Not set</h4>
                }
                  </div>
             
              <div className="form-group">
                
              { this.props.settings ?
                <button className="btn btn-danger" type="submit">
                  Delete this Settings
                </button>                : 
          null
    }
               
              </div>
             
          </form>
          </div>
              : 


           <div className={`card-body card-${this.props.theme}  text-${this.props.navtheme}`}>
            <h2 className="text-center">Current SMS Settings</h2>
            <form onSubmit={this.onDelete}>
              <div className="form-group">
                <label>Phone Number</label>
                { this.props.updatedSettings ?
                <h4 className={` border-${this.props.theme}  text-${this.props.navtheme}`}>{this.props.updatedSettings.phone}</h4>
                : 
                <h4 className={` border-${this.props.theme}  text-${this.props.navtheme}`}>Not set</h4>
                }
    
              </div>
              <div className="form-group">
                <label>Check time (min)</label>
                { this.props.settings ?
                <h4 className={` border-${this.props.theme}  text-${this.props.navtheme}`}>{this.props.updatedSettings.updatetime}</h4>
                : 
                <h4 className={` border-${this.props.theme}  text-${this.props.navtheme}`}>Not set</h4>
                }
                  </div>
             
              <div className="form-group">
                
              { this.props.settings ?
                <button className="btn btn-danger" type="submit">
                  Delete this Settings
                </button>    : 
          null
    }
               
              </div>
             
          </form>
          </div>
    }

          
        </div>

              <div className="col-xs-12 col-sm-6 col-md-6 col-12">
              {euser ? 

            
          <div className={`card-body card-${this.props.theme}  text-${this.props.navtheme}`}>
            <h2 className="text-center">Edit SMS Settings</h2>
            <form onSubmit={this.props.settings ? this.onUpdate : this.onSubmit }>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  onChange={this.onChange}
                  value={this.state.phone}
                />
              </div>
              <div className="form-group">
                <label>Check time (min)</label>
                <input
                  type="text"
                  className="form-control"
                  name="updatetime"
                  onChange={this.onChange}
                  value={this.state.updatetime}
                />
              </div>
              {euser ? 
               <input
               type="hidden"
               className="form-control"
               name="student"
               onChange={this.onChange}
               value={euser.userid}
             /> : null

            }
             
              
              {this.props.settings ? 
                <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </div> :
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Create
                </button>
              </div>
            }
            </form>
          </div>
              : null
          }
        </div>
        </div>




        

        </Fragment>
    }
}
const mapStateToProps = (state) => ({
    euser : state.user.users,
    theme : state.theme.theme[0],
    navtheme : state.theme.theme[1],
    settings : state.settings.settings[state.settings.settings.length - 1],
    updatedSettings : state.settings.updateSetting
    
});
        
    

export default connect(mapStateToProps,{getSettings, deleteSetting, addSettings, updateSetting})(Settings);