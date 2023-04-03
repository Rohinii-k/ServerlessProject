(this["webpackJsonpbook-store-v2"]=this["webpackJsonpbook-store-v2"]||[]).push([[12],{288:function(e,n,t){"use strict";t.r(n),t.d(n,"amplify_select_mfa_type",(function(){return A}));var i=t(80),r=t(19),o=t(91),u=t(318),a=t(319),s=t(317),E=t(43),_=function(e,n,t,i){return new(t||(t=Promise))((function(r,o){function u(e){try{s(i.next(e))}catch(n){o(n)}}function a(e){try{s(i.throw(e))}catch(n){o(n)}}function s(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(u,a)}s((i=i.apply(e,n||[])).next())}))},c=function(e,n){var t,i,r,o,u={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,i=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(r=(r=u.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){u.label=o[1];break}if(6===o[0]&&u.label<r[1]){u.label=r[1],r=o;break}if(r&&u.label<r[2]){u.label=r[2],u.ops.push(o);break}r[2]&&u.ops.pop(),u.trys.pop();continue}o=n.call(e,u)}catch(a){o=[6,a],i=0}finally{t=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},T=new r.a("SelectMFAType"),A=function(){function e(e){var n=this;Object(i.g)(this,e),this.handleSubmit=function(e){return n.verify(e)},this.TOTPSetup=!1,this.selectMessage=null,this.MFAMethod=null,this.isTOTP=!1,this.isNoMFA=!1,this.isSMS=!1,this.loading=!1}return e.prototype.handleRadioButtonChange=function(e){this.TOTPSetup=!1,this.selectMessage=null,this.isNoMFA=!1,this.isTOTP=!1,this.isSMS=!1;var n=e.target,t=n.value,i=n.type,r=n.checked,o=["radio","checkbox"].includes(i);t===u.c.SMS&&o&&(this.isSMS=r),t===u.c.TOTP&&o&&(this.isTOTP=r),t===u.c.NOMFA&&o&&(this.isNoMFA=r)},e.prototype.verify=function(e){return _(this,void 0,void 0,(function(){var n,t,i,r;return c(this,(function(_){switch(_.label){case 0:if(e&&e.preventDefault(),T.debug("MFA Type Values",{TOTP:this.isTOTP,SMS:this.isSMS,"No MFA":this.isNoMFA}),this.isTOTP?this.MFAMethod=u.c.TOTP:this.isSMS?this.MFAMethod=u.c.SMS:this.isNoMFA&&(this.MFAMethod=u.c.NOMFA),n=this.authData,!E.a||"function"!==typeof E.a.setPreferredMFA)throw new Error(s.d);this.loading=!0,_.label=1;case 1:return _.trys.push([1,3,4,5]),[4,E.a.setPreferredMFA(n,this.MFAMethod)];case 2:return t=_.sent(),T.debug("Set Preferred MFA Succeeded",t),this.selectMessage=o.a.get(a.a.SUCCESS_MFA_TYPE)+" "+this.MFAMethod,[3,5];case 3:return i=_.sent(),(r=i.message)===s.l||r===s.m?(this.TOTPSetup=!0,this.selectMessage=o.a.get(a.a.SETUP_TOTP_REQUIRED)):(T.debug("Set Preferred MFA failed",i),this.selectMessage=o.a.get(a.a.UNABLE_TO_SETUP_MFA_AT_THIS_TIME)),[3,5];case 4:return this.loading=!1,[7];case 5:return[2]}}))}))},e.prototype.contentBuilder=function(){var e=this;if(!this.MFATypes||Object.keys(this.MFATypes).length<2)return T.debug(o.a.get(a.a.LESS_THAN_TWO_MFA_VALUES_MESSAGE)),Object(i.f)("div",null,Object(i.f)("a",null,o.a.get(a.a.LESS_THAN_TWO_MFA_VALUES_MESSAGE)));var n=this.MFATypes,t=n.SMS,r=n.TOTP,u=n.Optional;return Object(i.f)("amplify-form-section",{submitButtonText:o.a.get(a.a.SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT),headerText:o.a.get(a.a.SELECT_MFA_TYPE_HEADER_TEXT),handleSubmit:function(n){return e.handleSubmit(n)},loading:this.loading},t?Object(i.f)("amplify-radio-button",{key:"sms",name:"MFAType",value:"SMS",label:"SMS",handleInputChange:function(n){return e.handleRadioButtonChange(n)}}):null,r?Object(i.f)("amplify-radio-button",{key:"totp",name:"MFAType",value:"TOTP",label:"TOTP",handleInputChange:function(n){return e.handleRadioButtonChange(n)}}):null,u?Object(i.f)("amplify-radio-button",{key:"noMFA",name:"MFAType",value:"NOMFA",label:"No MFA",handleInputChange:function(n){return e.handleRadioButtonChange(n)}}):null)},e.prototype.render=function(){return Object(i.f)("div",null,this.contentBuilder(),this.TOTPSetup?Object(i.f)("amplify-totp-setup",{user:this.authData}):null)},e}()},317:function(e,n,t){"use strict";t.d(n,"a",(function(){return h})),t.d(n,"b",(function(){return E})),t.d(n,"c",(function(){return r})),t.d(n,"d",(function(){return S})),t.d(n,"e",(function(){return A})),t.d(n,"f",(function(){return c})),t.d(n,"g",(function(){return f})),t.d(n,"h",(function(){return g})),t.d(n,"i",(function(){return L})),t.d(n,"j",(function(){return p})),t.d(n,"k",(function(){return T})),t.d(n,"l",(function(){return d})),t.d(n,"m",(function(){return l})),t.d(n,"n",(function(){return s})),t.d(n,"o",(function(){return u})),t.d(n,"p",(function(){return O})),t.d(n,"q",(function(){return _})),t.d(n,"r",(function(){return o})),t.d(n,"s",(function(){return a})),t.d(n,"t",(function(){return i}));var i="username",r="email",o="code",u="phone",a="password",s="country-dial-code-select",E="+1",_="amplify-auth-source",c="amplify-redirected-from-hosted-ui",T="amplify-authenticator-authState",A="Phone number can not be empty",S="No Auth module found, please ensure @aws-amplify/auth is imported",f="SETUP_TOTP",d="User has not set up software token mfa",l="User has not verified software token mfa",O="SUCCESS",h="auth",L="UI Auth",g="ToastAuthError",p="AuthStateChange"},318:function(e,n,t){"use strict";var i,r,o,u,a;t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return r})),t.d(n,"d",(function(){return a})),t.d(n,"e",(function(){return u})),function(e){e.SignUp="signup",e.SignOut="signout",e.SignIn="signin",e.Loading="loading",e.SignedOut="signedout",e.SignedIn="signedin",e.SigningUp="signingup",e.ConfirmSignUp="confirmSignUp",e.confirmingSignUpCustomFlow="confirmsignupcustomflow",e.ConfirmSignIn="confirmSignIn",e.confirmingSignInCustomFlow="confirmingsignincustomflow",e.VerifyingAttributes="verifyingattributes",e.ForgotPassword="forgotpassword",e.ResetPassword="resettingpassword",e.SettingMFA="settingMFA",e.TOTPSetup="TOTPSetup",e.CustomConfirmSignIn="customConfirmSignIn",e.VerifyContact="verifyContact"}(i||(i={})),function(e){e.TOTP="TOTP",e.SMS="SMS",e.NOMFA="NOMFA"}(r||(r={})),function(e){e.SoftwareTokenMFA="SOFTWARE_TOKEN_MFA",e.SMSMFA="SMS_MFA",e.NewPasswordRequired="NEW_PASSWORD_REQUIRED",e.MFASetup="MFA_SETUP",e.CustomChallenge="CUSTOM_CHALLENGE"}(o||(o={})),function(e){e.Password="password"}(u||(u={})),function(e){e.username="username",e.email="email",e.phone_number="phone_number"}(a||(a={}))},319:function(e,n,t){"use strict";var i;t.d(n,"a",(function(){return i})),function(e){e.BACK_TO_SIGN_IN="Back to Sign In",e.CHANGE_PASSWORD_ACTION="Change",e.CHANGE_PASSWORD="Change Password",e.CODE_LABEL="Verification code",e.CODE_PLACEHOLDER="Enter code",e.CONFIRM_SIGN_UP_CODE_LABEL="Confirmation Code",e.CONFIRM_SIGN_UP_CODE_PLACEHOLDER="Enter your code",e.CONFIRM_SIGN_UP_HEADER_TEXT="Confirm Sign up",e.CONFIRM_SIGN_UP_LOST_CODE="Lost your code?",e.CONFIRM_SIGN_UP_RESEND_CODE="Resend Code",e.CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT="Confirm",e.CONFIRM_SMS_CODE="Confirm SMS Code",e.CONFIRM_TOTP_CODE="Confirm TOTP Code",e.CONFIRM="Confirm",e.CREATE_ACCOUNT_TEXT="Create account",e.EMAIL_LABEL="Email Address *",e.EMAIL_PLACEHOLDER="Enter your email address",e.FORGOT_PASSWORD_TEXT="Forgot your password?",e.LESS_THAN_TWO_MFA_VALUES_MESSAGE="Less than two mfa types available",e.NEW_PASSWORD_LABEL="New password",e.NEW_PASSWORD_PLACEHOLDER="Enter your new password",e.NO_ACCOUNT_TEXT="No account?",e.PASSWORD_LABEL="Password *",e.PASSWORD_PLACEHOLDER="Enter your password",e.PHONE_LABEL="Phone Number *",e.PHONE_PLACEHOLDER="(555) 555-1212",e.QR_CODE_ALT="qrcode",e.RESET_PASSWORD_TEXT="Reset password",e.RESET_YOUR_PASSWORD="Reset your password",e.SELECT_MFA_TYPE_HEADER_TEXT="Select MFA Type",e.SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT="Verify",e.SEND_CODE="Send Code",e.SETUP_TOTP_REQUIRED="TOTP needs to be configured",e.SIGN_IN_ACTION="Sign In",e.SIGN_IN_HEADER_TEXT="Sign in to your account",e.SIGN_IN_TEXT="Sign in",e.SIGN_IN_WITH_AMAZON="Sign in with Amazon",e.SIGN_IN_WITH_AUTH0="Sign in with Auth0",e.SIGN_IN_WITH_AWS="Sign in with AWS",e.SIGN_IN_WITH_FACEBOOK="Sign in with Facebook",e.SIGN_IN_WITH_GOOGLE="Sign in with Google",e.SIGN_OUT="Sign Out",e.SIGN_UP_EMAIL_PLACEHOLDER="Email",e.SIGN_UP_HAVE_ACCOUNT_TEXT="Have an account?",e.SIGN_UP_HEADER_TEXT="Create a new account",e.SIGN_UP_PASSWORD_PLACEHOLDER="Password",e.SIGN_UP_SUBMIT_BUTTON_TEXT="Create Account",e.SIGN_UP_USERNAME_PLACEHOLDER="Username",e.SUCCESS_MFA_TYPE="Success! Your MFA Type is now:",e.TOTP_HEADER_TEXT="Scan then enter verification code",e.TOTP_LABEL="Enter Security Code:",e.TOTP_SETUP_FAILURE="TOTP Setup has failed",e.TOTP_SUBMIT_BUTTON_TEXT="Verify Security Token",e.TOTP_SUCCESS_MESSAGE="Setup TOTP successfully!",e.UNABLE_TO_SETUP_MFA_AT_THIS_TIME="Failed! Unable to configure MFA at this time",e.USERNAME_LABEL="Username *",e.USERNAME_PLACEHOLDER="Enter your username",e.VERIFY_CONTACT_EMAIL_LABEL="Email",e.VERIFY_CONTACT_HEADER_TEXT="Account recovery requires verified contact information",e.VERIFY_CONTACT_PHONE_LABEL="Phone Number",e.VERIFY_CONTACT_SUBMIT_LABEL="Submit",e.VERIFY_CONTACT_VERIFY_LABEL="Verify",e.ADDRESS_LABEL="Address",e.ADDRESS_PLACEHOLDER="Enter your address",e.NICKNAME_LABEL="Nickname",e.NICKNAME_PLACEHOLDER="Enter your nickname",e.BIRTHDATE_LABEL="Birthday",e.BIRTHDATE_PLACEHOLDER="Enter your birthday",e.PICTURE_LABEL="Picture URL",e.PICTURE_PLACEHOLDER="Enter your picture URL",e.FAMILY_NAME_LABEL="Family Name",e.FAMILY_NAME_PLACEHOLDER="Enter your family name",e.PREFERRED_USERNAME_LABEL="Preferred Username",e.PREFERRED_USERNAME_PLACEHOLDER="Enter your preferred username",e.GENDER_LABEL="Gender",e.GENDER_PLACEHOLDER="Enter your gender",e.PROFILE_LABEL="Profile URL",e.PROFILE_PLACEHOLDER="Enter your profile URL",e.GIVEN_NAME_LABEL="First Name",e.GIVEN_NAME_PLACEHOLDER="Enter your first name",e.ZONEINFO_LABEL="Time zone",e.ZONEINFO_PLACEHOLDER="Enter your time zone",e.LOCALE_LABEL="Locale",e.LOCALE_PLACEHOLDER="Enter your locale",e.UPDATED_AT_LABEL="Updated At",e.UPDATED_AT_PLACEHOLDER="Enter the time the information was last updated",e.MIDDLE_NAME_LABEL="Middle Name",e.MIDDLE_NAME_PLACEHOLDER="Enter your middle name",e.WEBSITE_LABEL="Website",e.WEBSITE_PLACEHOLDER="Enter your website",e.NAME_LABEL="Full Name",e.NAME_PLACEHOLDER="Enter your full name"}(i||(i={}))},91:function(e,n,t){"use strict";t.d(n,"a",(function(){return _}));var i=t(19),r=new i.a("I18n"),o=function(){function e(e){this._options=null,this._lang=null,this._dict={},this._options=Object.assign({},e),this._lang=this._options.language,!this._lang&&"undefined"!==typeof window&&window&&window.navigator&&(this._lang=window.navigator.language),r.debug(this._lang)}return e.prototype.setLanguage=function(e){this._lang=e},e.prototype.get=function(e,n){if(void 0===n&&(n=void 0),!this._lang)return"undefined"!==typeof n?n:e;var t=this._lang,i=this.getByLanguage(e,t);return i||(t.indexOf("-")>0&&(i=this.getByLanguage(e,t.split("-")[0])),i||("undefined"!==typeof n?n:e))},e.prototype.getByLanguage=function(e,n,t){if(void 0===t&&(t=null),!n)return t;var i=this._dict[n];return i?i[e]:t},e.prototype.putVocabulariesForLanguage=function(e,n){var t=this._dict[e];t||(t=this._dict[e]={}),Object.assign(t,n)},e.prototype.putVocabularies=function(e){var n=this;Object.keys(e).map((function(t){n.putVocabulariesForLanguage(t,e[t])}))},e}(),u=t(12),a=new i.a("I18n"),s=null,E=null,_=function(){function e(){}return e.configure=function(n){return a.debug("configure I18n"),n?(s=Object.assign({},s,n.I18n||n),e.createInstance(),s):s},e.getModuleName=function(){return"I18n"},e.createInstance=function(){a.debug("create I18n instance"),E||(E=new o(s))},e.setLanguage=function(n){return e.checkConfig(),E.setLanguage(n)},e.get=function(n,t){return e.checkConfig()?E.get(n,t):"undefined"===typeof t?n:t},e.putVocabulariesForLanguage=function(n,t){return e.checkConfig(),E.putVocabulariesForLanguage(n,t)},e.putVocabularies=function(n){return e.checkConfig(),E.putVocabularies(n)},e.checkConfig=function(){return E||(E=new o(s)),!0},e}();u.a.register(_)}}]);
//# sourceMappingURL=12.05db8d62.chunk.js.map