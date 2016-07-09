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
    const role = this.refs.roleSelection.value
    const password_confirmation = this.refs.passwordConfirmation.value
    const first_name = this.refs.firstName.value
    const last_name = this.refs.lastName.value
    const business_name = this.refs.businessName.value
    const contact_phone = this.refs.contactPhone.value
    const contact_email = this.refs.contactEmail.value
    const website_link = this.refs.websiteLink.value
    const vendor_type = this.refs.vendorType.value
    this.props.dispatch(handleSignUpVendor(email,
                                     password,
                                     password_confirmation,
                                     role,
                                     first_name,
                                     last_name,
                                     business_name,
                                     contact_email,
                                     contact_phone,
                                     website_link,
                                     vendor_type,
                                     this.props.history))
  }

  render() {
    return (
      <div className='row signupvendor'>
        <div className='col s12 m4 offset-m3 center'>
          <div className='signupvendor-div'>
            <div className='col s12 center signupvendor-form-div'>
            <p className='signupvendor-title'>VENDOR SIGN UP</p>
            <form onSubmit={ this.handleSubmit.bind(this) } >
              <input type='email' placeholder='Email' ref='email' required />
              <input type='password' placeholder='Password' ref='password' require />
              <input type='password' placeholder='Password Confirmation' ref='passwordConfirmation' require />
              <label>First Name</label>
              <input defaultValue='asdf' ref="firstName" />
              <label>Last Name</label>
              <input defaultValue='asdf'ref="lastName" />
              <label>Business Name</label>
              <input defaultValue='asdf'ref="businessName" />
              <label>Contact Phone</label>
              <input defaultValue='8888888888'ref="contactPhone" />
              <label>Contact Email</label>
              <input defaultValue='asdf@asdf.com'ref="contactEmail" />
              <label>Website Link</label>
              <input defaultValue='asdf.com'ref="websiteLink" />
              <input type='hidden' className='white-text' ref='roleSelection' defaultValue='vendor'>
             </input>
              <select ref='vendorType' defaultValue="food">
                <option value="" disabled>What Type of Vendor Are You?</option>
                <option value="crafts">Crafts</option>
                <option value="vendor">Food</option>
              </select>

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
