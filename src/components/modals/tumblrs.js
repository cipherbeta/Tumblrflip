/*
  Handles adding and removing tumblrs from the primary list.
  Triggered inside components/header.js.
  Modal handled by @blueprintjs, tumblrs added/removed via Redux.
*/

import React, { Component } from 'react';
import { Dialog, Classes, Button, InputGroup, Tag } from '@blueprintjs/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { connect } from 'react-redux';
import store from '../../redux/store';
import { removeTumblr, addTumblr } from '../../redux/actions';

class TumblrModal extends Component {
  state = {
    tumblrname: ""
  }

  handleTumblrInput = (event) => {
    this.setState({tumblrname: event.target.value});
  }

  handleTumblrSubmission = (event) => {
    event.preventDefault();
    let string = this.state.tumblrname.split(' ');
    console.log(string);
    string.forEach(item => {
      store.dispatch(addTumblr(item));
    });
    this.setState({tumblrname: ""});
  }

  render(){
    return(
      <Dialog className={"bp3-dark " + Classes.DIALOG} onClose={this.props.toggle} 
      isOpen={this.props.open} title="Add Tumblrs" icon={<FontAwesomeIcon icon="plus"/>}>
        <div className={Classes.DIALOG_BODY}>
        <form onSubmit={this.handleTumblrSubmission}>
          <InputGroup type="text" onChange={e=>this.handleTumblrInput(e)} value={this.state.tumblrname} style={{border: '1px solid #A7B6C2'}}
            leftIcon={<FontAwesomeIcon className="input-icon" icon={['fab', 'tumblr-square']}/>} placeholder="add tumblr blog name here"/>
            <button type="submit" hidden />
        </form>
          <div style={{marginTop: '1em'}}>
            {this.props.tumblrs.map((item, i) => {
              return(
                <Tag key={i} className="tags" large interactive minimal onClick={()=>(store.dispatch(removeTumblr(item)))}>{item}</Tag>
              )
            })}
          </div>
          <br/><br/>
        </div>
      </Dialog>
    )
  }
  
}

const mapStateToProps = state => {
  return {
    tumblrs: state.tumblrs
  }
}

export default connect(mapStateToProps)(TumblrModal);