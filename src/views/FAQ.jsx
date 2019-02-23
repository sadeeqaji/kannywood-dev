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
                  <h4 className="display-4 text-dark text-center">Frequently Asked Questions</h4>
                </CardHeader>
                <CardText className="text-dark">
                   <h4 className=" text-dark py-3">Can I stream unlimited movies? </h4>
                      Yes, simply select your movie or television show and you can watch it instantly as long as your device is connected to the internet. You can stream from up to one (1) device at a time, per account.

                       <h4 className=" text-dark py-3">How fast does the film start playing?</h4>
                      Fast – films start playing in seconds. It will depend on the speed of your broadband internet connection. Films are streamed over the internet, so you don’t have to wait for them to download. You can pause, rewind or fast forward as often as you like. 

                      <h4  className=" text-dark py-3">How fast does my broadband internet connection need to be to watch instantly?</h4>
                      Watching instantly works with all levels of broadband, however, we recommend a minimum speed of 500 kbps (0.5 MB).


                    <h4 className=" text-dark py-3">How often do you release new content</h4>
                     We release content every week, there is never a dull moment on kannywoodtv.com there will also be great movies and television shows for you enjoy as often as you want, anywhere and anytime.
                    <h4 className=" text-dark py-3">What browser is best to use to watch</h4>
                      We recommend that for kannywoodtv.com you use Chrome. We have found it to be the best performing. That does not mean that streaming on kannywoodtv.com will not work on other browsers. If you need to download Google Chrome, please follow this link: <a href="https://www.google.com/chrome/browser/desktop/ " target="blank"> chrome browser </a>.
                    <h4 className=" text-dark py-3">I need help! How can I contact kannywoodtv.com?</h4>
                      We are here for you 24 hours a day, 7 days a week. For full contact information please contact us via the LiveChat window at the bottom of the page.
                    
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

