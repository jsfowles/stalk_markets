import React from 'react';
import { connect } from 'react-redux';
import { handleLogin, handleSignUpVendor, handleFacebookLogin } from './actions';
import { browserHistory } from 'react-router'


class SignUpVendor extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    $('select').material_select();
  }


  handleSubmit(e) {
    e.preventDefault();

    const email =  this.refs.email.value
    const password = this.refs.password.value
    const password_confirmation = this.refs.passwordConfirmation.value
    const role = this.refs.roleSelection.value
    const first_name = this.refs.firstName.value
    const last_name = this.refs.lastName.value
    const business_name = this.refs.businessName.value
    const description = this.refs.description.value
    const contact_email = this.refs.contactEmail.value
    const contact_phone = this.refs.contactPhone.value
    const website_link = this.refs.websiteLink.value
    const vendor_type = this.refs.vendorType.value
    this.props.dispatch(handleSignUpVendor(email,
                                     password,
                                     password_confirmation,
                                     role,
                                     first_name,
                                     last_name,
                                     business_name,
                                     description,
                                     contact_email,
                                     contact_phone,
                                     website_link,
                                     vendor_type,
                                     this.props.history))
  }

  render() {
    return (
      <div className='row signupvendor'>
        <div className='col s12'>
          <div className='signupvendor-div'>
            <div className='col s12 center signupvendor-form-div'>
            <p className='signupvendor-title'>VENDOR SIGN UP</p>
            <form onSubmit={ this.handleSubmit.bind(this) } >
              <div>
                <input type='email' className='white-text' placeholder='Email' ref='email' required />
                <input type='password' className='white-text' placeholder='Password' ref='password' require />
                <input type='password' className='white-text' placeholder='Password Confirmation' ref='passwordConfirmation' require />
              </div>
              <div>
                <label>First Name</label>
                <input defaultValue='' className='white-text' ref="firstName" />
              </div>
              <div>
                <label>Last Name</label>
                <input defaultValue='' className='white-text' ref="lastName" />
              </div>
              <div>
                <label>Business Name</label>
                <input defaultValue='' className='white-text' ref="businessName" />
              </div>
              <div>
                <label>Description</label>
                <input defaultValue='' className='white-text' ref="description" />
              </div>
              <div>
                <label>Contact Phone</label>
                <input defaultValue='' className='white-text' ref="contactPhone" />
              </div>
              <div>
                <label>Contact Email</label>
                <input defaultValue='' className='white-text' ref="contactEmail" />
              </div>
              <div>
                <label>Website Link</label>
                <input defaultValue='' className='white-text' ref="websiteLink" />
              </div>
              <div>
                <input type='hidden' className='white-text' ref='roleSelection' defaultValue='vendor'>
                </input>
                <label>Type of Vendor?</label>
                <select className='white-text' ref='vendorType' defaultValue="food">
                  <option value="" disabled>What Type of Vendor Are You?</option>
                  <option className='white-text' value="crafts">Crafts</option>
                  <option className='white-text' value="vendor">Food</option>
                </select>
              </div>

              <input type='submit' className='btn' value='Sign up' />
            </form>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default connect()(SignUpVendor);
