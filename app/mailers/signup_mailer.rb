class SignupMailer < ApplicationMailer
 include SendGrid
 default from: ENV['MAIL_FROM']

 def new_signup(user)
   @user = user
   mail(to: @user.email, subject: 'Thank you for signing up!')
 end
end
