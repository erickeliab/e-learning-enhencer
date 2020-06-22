import React, { Component } from 'react'

export default class CourseItem extends Component {
    render() {
        return (

            <div class="col-lg-12 col-12">
           
            <div class="small-box bg-info">
              <div class="inner">
                <h3>Couse Name</h3>

                <h5>Code</h5>
              </div>
              <div class="icon">
                <i class="ion ion-bag"></i>
              </div>
          
                
                <ul class="nav nav-pills nav-sidebar flex-column transformx-auto" data-widget="treeview" role="menu" data-accordion="false">
        <li class="nav-item has-treeview">
          <a  class="nav-link">
            <i class="nav-icon fas fa-chart-pie"></i>
            <p> <h6 className="text-light"> View the forums</h6>
               
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
          <li class="container">

<div class="card direct-chat direct-chat-primary">
  <div class="card-header">
    <h3 class="card-title text-dark">Discussion</h3>

    <div class="card-tools">
      <span data-toggle="tooltip" title="3 New Messages" class="badge badge-primary">3</span>
      <button type="button" class="btn btn-tool" data-card-widget="collapse">
        <i class="fas fa-minus"></i>
      </button>
      <button type="button" class="btn btn-tool" data-toggle="tooltip" title="Contacts"
              data-widget="chat-pane-toggle">
        <i class="fas fa-comments"></i>
      </button>
      <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i>
      </button>
    </div>
  </div>

  <div class="card-body">
  
    <div class="direct-chat-messages">
     
      <div class="direct-chat-msg">
        <div class="direct-chat-infos clearfix">
          <span class="direct-chat-name float-left">Alexander Pierce</span>
          <span class="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
        </div>
       
        <img class="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user image" />
    
        <div class="direct-chat-text">
          Is this template really for free? That's unbelievable!
        </div>
       
      </div>
      </div>

      
  </div>

  <div class="card-footer">
    <form action="#" method="post">
      <div class="input-group">
        <input type="text" name="message" placeholder="Type Message ..." class="form-control" />
        <span class="input-group-append">
          <button type="button" class="btn btn-primary">Send</button>
        </span>
      </div>
    </form>
  </div>

  </div>
</li>
           
            <li class="nav-item has-treeview">
          <a href="#" class="nav-link">
            <i class="nav-icon fas fa-chart-pie"></i>
            <p>
              Forum 1
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
          <li class="nav-item has-treeview">
          <a href="#" class="nav-link">
            <i class="nav-icon fas fa-chart-pie"></i>
            <p>
              Discusion 1
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="container">

            <div class="card direct-chat direct-chat-primary">
              <div class="card-header">
                <h3 class="card-title text-dark">Discussion</h3>

                <div class="card-tools">
                  <span data-toggle="tooltip" title="3 New Messages" class="badge badge-primary">3</span>
                  <button type="button" class="btn btn-tool" data-card-widget="collapse">
                    <i class="fas fa-minus"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-toggle="tooltip" title="Contacts"
                          data-widget="chat-pane-toggle">
                    <i class="fas fa-comments"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i>
                  </button>
                </div>
              </div>

              <div class="card-body">
              
                <div class="direct-chat-messages">
                 
                  <div class="direct-chat-msg">
                    <div class="direct-chat-infos clearfix">
                      <span class="direct-chat-name float-left">Alexander Pierce</span>
                      <span class="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
                    </div>
                   
                    <img class="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user image" />
                
                    <div class="direct-chat-text">
                      Is this template really for free? That's unbelievable!
                    </div>
                   
                  </div>
                  </div>

                  
              </div>

              <div class="card-footer">
                <form action="#" method="post">
                  <div class="input-group">
                    <input type="text" name="message" placeholder="Type Message ..." class="form-control" />
                    <span class="input-group-append">
                      <button type="button" class="btn btn-primary">Send</button>
                    </span>
                  </div>
                </form>
              </div>

              </div>
            </li>
          </ul>
        </li>
          </ul>
        </li>
          </ul>
        </li>

        
    </ul>

    </div>
            </div>
        )
    }
}
