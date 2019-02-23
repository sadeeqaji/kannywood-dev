import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardFooter,
  CardText,
  Row,
  Col
} from "reactstrap";
// privacy page
class Privacy extends React.Component {
  render() {
    return (
      <>
        <div className="container-fluid bg-white">
          <Row className="py-5">
            <Col md="10 mx-auto py-5">
              <Card className="p-5 bg-white "
                >
                <CardHeader>
                  <h4 className="display-4 text-dark text-center">Privacy Policy</h4>
                </CardHeader>
                <CardText className="text-dark">
                   <h4 className=" text-dark py-3">1. Definitions </h4>
                      At Kannywood Partners Ltd; we recognize your privacy is important. This Policy explains the Company’s privacy practices on its Website (the “Site”) and Mobile Applications. This Policy also explains what information we collect about our customers and how we use this information. This Privacy Policy is designed to be read in connection with the Site’s Terms of Use. By accessing or using our Site, you agree to be bound by the Terms of Use and this Privacy Policy.

                      For the purposes of clarity, “we,” “us,” “our,” the ”Company,” and ”Kannywoodtv,” refers to Kannywood Partners Ltd. The “Services” refers to Kannywoodtv, a Subscription Video On Demand platform for watching Nollywood Movies and TV Series. “User,” “customer,” or “subscriber,” refers to consumers of the service. “Personal Information,” “Personal Data,” or “Data” means any information that identifies or can be used to identify a user, directly or indirectly, including, but not limited to, name, email address, mobile number, or IP address.
                    <h4 className=" text-dark py-3">2. Data Processing</h4>
                      All information supplied by Users of Kannywoodtv.com as defined under the Terms of Use is covered by the Data Protection Act of 1998, and the General Data Protection Regulation of 2018.

                      <span>a. Voluntarily Submitted Data:</span> When you sign up for Kannywoodtv, pay for a subscription, consult with our customer service team, send us an email, post on our blog, comment on a video, or communicate with us in any way, you are voluntarily giving us information that we process, including, but not limited to; name, username, email address, mobile number, IP address, credit card information, bank information, and purchase history. By submitting this information, you consent to its’ collection, usage, disclosure, and storage by us, as described in our Terms of Use and in this Privacy Policy.
                      <span> b. Automatically Collected Data:</span> When you use the Services or browse one of our Websites or Mobile Applications, we may collection information about your visit, your usage of the Services, and/or your web browsing; which may include your IP address, operating system, device type, operating system, browser ID, browsing activity, and other information about how you interacted with our Websites or Mobile Applications. We may collect this information as a part of log files as well as through the use of cookies or other tracking technologies. Our use of cookies is discussed more below.
                      <span>c. Service Usage Data:</span> We may receive information about how and when you use the Services, store it in log files or other types of files associated with your account, and link it to other information we collect about you. This information may include, for example, your IP address, time, date, browser used, and actions you have taken within the Website or Mobile Applications. This type of information helps us to improve our Services for both you and for all of our users.
                      <span>d.Cookie Data:</span> The Site uses cookies. Cookies are text files containing small amounts of information which are downloaded to your device when you visit a website. Cookies are useful because they allow a website to recognize a User’s device. And, to do a lot of other tasks, you may see examples below. You can find more information about cookies at: allaboutcookies.org and youronlinechoices.eu. We use performance, functionality and targeting or advertising cookies on the Site. These cookies may allow:
                      .Functionality - us to remember choices you make to improve your experience (such as your username, age classification, subscription package and period, where applicable, free trial period, movie player quality preference, session management, and live chats etc.);
                      .Advertising or targeting - third party advertising companies to display advertisement more relevant to you and your interests. As part of their services, they will place a separate cookie on your computer to help them precisely target advertising to you. These third party advertising companies do not collect personally identifiable information and;
                      .Performance - us or/and third party partners collect anonymous information including but not limited to performance and website improvement. This may include web analytics, error management and testing designs.
                      Users may choose not to accept cookies, but this may prevent the Site from functioning properly, or may affect your experience on the Site, or you may not be presented with relevant advertising. Most browsers are initially set up to accept cookies, but you can reset your browser to refuse all cookies or to indicate when a cookie is being sent. You can find out how to make these changes to your browser at this site: allaboutcookies.org/manage-cookies.

                      <span>e. Mobile Application Data:</span> When you use our Mobile Applications, we may collect certain information in addition to information described elsewhere in this Policy. For example, the type of device and operating system you use. We may ask you if you want to receive push notifications. If you have opted in to these notifications and no longer wish to receive them, you may turn them off through your device’s operating system. We may use mobile analytics software to better understand how people use our application. We may collect information about how often you use the application and other performance data.

                    <h4  className=" text-dark py-3"> 3. Use and Disclosure of Personal Information</h4>
                      We will not sell, trade, or rent your Personal Information. We process Personal Information in the following ways:

                      <span>a. For Promotional Purposes:</span> For example, if we collect your Personal Information when you visit our Website and do not pay for a Subscription, we may send you an email inviting you to Subscribe. You can stop receiving our promotional emails by following the unsubscribe instructions included in every email we send, or by adjusting your Marketing Preferences in your profile. This data is processed under Consent.
                      <span>b. For Billing Purposes:</span> This includes sending you emails, invoices, receipts, notices of delinquency, and alerting you if we need a different credit card number. We use third parties for secure credit card transaction processing, and we send billing information to those third parties to process your orders and credit card payments. This data is processed under Contract.
                      <span>c. To Provide and Improve Our Services.</span> This includes, for example, aggregating information from your use of the Services or visit to our Websites or Mobile Applications and sharing this information with third parties to improve our Services. This might also include sharing your information with third parties in order to provide and support our Services. When we do have to share Personal Information with third parties, we take steps to protect your information by requiring these third parties to enter into a contract with us that requires them to use the Personal Information we transfer to them in a manner that is consistent with this policy. This data is processed under Legitimate Interest.
                      <span>d. For Account and Support Communication:</span> For example, we may inform you of subscription payment successes or failures, password reset attempts, and other support-related functions. This data is processed under Contract.
                      <span>e. For Platform Alerts:</span> For example, we may inform you of temporary or permanent changes to our Services, such as pricing changes, planned outages, new features, version updates, releases, abuse warnings, and changes to our Privacy Policy. This data is processed under Contract.
                      <span>f. For Legal Purposes:</span> For example, complying with court orders, valid discovery requests, valid subpoenas, to prosecute and defend a court, arbitration, or similar legal proceeding. To respond to lawful requests by public authorities, including to meet national security or law enforcement requirements. To provide information to representatives and advisors, including attorneys and accountants, to help us comply with legal, accounting, or security requirements. This data is processed under Legal Obligation.
                      <span>g. For Transfer Purposes:</span> In the case of a sale, merger, consolidation, liquidation, reorganization, or acquisition. In that event, any acquirer will be subject to our obligations under this Privacy Policy, including your rights to access and choice. We will notify you of the change either by sending you an email or posting a notice on our Website. This data is processed under Legal Obligation.

                    <h4 className=" text-dark py-3">Data Retention</h4>
                      We may retain Personal Information about the User, as long as it is necessary for business and/or legal purposes. Also, we may retain aggregated anonymous information indefinitely. In addition, we may retain your information for an additional period as is permitted or required to, among other things, comply with our legal obligations, resolve disputes, and enforce agreements.
                    <h4 className=" text-dark py-3">Data Transfer</h4>
                      This Site processes information about our Users on servers located in a number of countries. The Company may also subcontract processing or sharing of information to third parties located in other countries, other than your home country. Also, such information may be transferred to another company if ownership of IPL changes. Therefore, information may be transferred across international borders outside the country where you use our services, including to countries that do not have laws providing specific protection for personal data or those that have different legal rules on data protection. You expressly consent to this.
                    <h4 className=" text-dark py-3">Data Security</h4>
                      We transmit and store the information we collect using standard security techniques. However, given the nature of the Internet and the fact that network security measures are not foolproof, we cannot guarantee the security of such information.
                    <h4 className=" text-dark py-3">Contact Us</h4>
                    <p  className=" text-dark">If you have questions regarding your data privacy rights, or would like to submit a related data privacy right request, please email us at privacy@kannywoodtv.com. Please allow up to 30 days for requests to be processed. Kannywood Partners Ltd reserves the right to charge a reasonable fee to process excessive or repeat requests.
                    </p>
                    <p className=" text-dark">If you have general questions concerning this Privacy Policy please contact us at:</p>
                    <p className=" text-dark">support@kannywoodtv.com</p>
                    <p className=" text-dark">+234-###-###-#####.</p>
                    <p className=" text-dark">kannywood Partners Ltd</p>
                  </CardText>
                <CardFooter className="align-self-center py-3">
                </CardFooter>
              </Card>
            </Col>   
          </Row> 

        </div>
        
      </>
    );
  }
}

export default Privacy;

