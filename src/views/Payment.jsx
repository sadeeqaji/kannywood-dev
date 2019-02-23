import React from "react";

// reactstrap components
import {
 
  Table,
  Row,
  Col,
  
} from "reactstrap";



class Payment extends React.Component {
  render() {
    return (
      <>
        <div className="container p-5">
          <Row>
            <Col md="12 bg-white txt-dark p-5">
             {/* <Card>
                
                <CardBody>*/}
                  <Table id="example" className="tablesorter display txt-dark py-5" responsive>
                    <thead className="txt-dark">
                      <tr>
                        <th>Card Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Plan</th>
                        <th>Amount </th>
                        <th>Subscription</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                <td>Tiger Nixon</td>
                <td>12-03-2017</td>
                <td>12:00 pm</td>
                <td>Basic</td>
                <td>₦3,500</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Garrett Winters</td>
                <td>12-03-2017</td>
                <td>12:00 pm</td>
                <td>Basic</td>
                <td>₦3,500</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Ashton Cox</td>
                <td>12-03-2017</td>
                <td>12:00 pm</td>
                <td>Basic</td>
                <td>₦3,500</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Cedric Kelly</td>
                <td>12-03-2017</td>
                <td>12:00 pm</td>
                <td>Basic</td>
                <td>₦3,500</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Airi Satou</td>
                <td>12-03-2017</td>
                <td>12:00 pm</td>
                <td>Basic</td>
                <td>₦3,500</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Brielle Williamson</td>
                <td>12-03-2017</td>
                <td>12:00 pm</td>
                <td>Basic</td>
                <td>₦3,500</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Herrod Chandler</td>
               <td>12-03-2017</td>
                <td>1:00 pm</td>
                <td>Basic</td>
                <td>₦7,500</td>
                <td>Expired</td>
            </tr>
            <tr>
                <td>Rhona Davidson</td>
                <td>12-03-2017</td>
                <td>1:00 pm</td>
                <td>Basic</td>
                <td>₦7,500</td>
                <td>Expired</td>
            </tr>
            <tr>
                <td>Colleen Hurst</td>
                <td>12-03-2017</td>
                <td>1:00 pm</td>
                <td>Basic</td>
                <td>₦7,500</td>
                <td>Expired</td>
            </tr>
            <tr>
                <td>Sonya Frost</td>
                <td>12-03-2017</td>
                <td>1:00 pm</td>
                <td>Basic</td>
                <td>₦7,500</td>
                <td>Expired</td>
            </tr>
        
            <tr>
                <td>Quinn Flynn</td>
                <td>12-03-2017</td>
                <td>1:00 pm</td>
                <td>Basic</td>
                <td>₦7,500</td>
                <td>Expired</td>
            </tr>
            <tr>
                <td>Charde Marshall</td>
                <td>Regional Director</td>
                <td>San Francisco</td>
                <td>Reset</td>
                <td>Active</td>
                <td>Edit</td>
            </tr>
            <tr>
                <td>Haley Kennedy</td>
               <td>12-03-2017</td>
                <td>Basic</td>
                <td>1:00 pm</td>
                <td>₦7,500</td>
                <td>Expired</td>
            </tr>
            <tr>
                <td>Tatyana Fitzpatrick</td>
                <td>Regional Director</td>
                <td>London</td>
                <td>19</td>
                <td>3,500</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Tatyana Fitzpatrick</td>
                <td>Regional Director</td>
                <td>London</td>
                <td>19</td>
                <td>3,500</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Tatyana Fitzpatrick</td>
                <td>Regional Director</td>
                <td>London</td>
                <td>19</td>
                <td>3,500</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Tatyana Fitzpatrick</td>
                <td>Regional Director</td>
                <td>London</td>
                <td>19</td>
                <td>3,500</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Tatyana Fitzpatrick</td>
                <td>Regional Director</td>
                <td>London</td>
                <td>19</td>
                <td>3,500</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Tatyana Fitzpatrick</td>
                <td>Regional Director</td>
                <td>London</td>
                <td>19</td>
                <td>3,500</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Tatyana Fitzpatrick</td>
                <td>Regional Director</td>
                <td>London</td>
                <td>19</td>
                <td>3,500</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Michael Silva</td>
               <td>12-03-2017</td>
                <td>Basic</td>
                <td>1:00 pm</td>
                <td>₦7,500</td>
                <td>Expired</td>
            </tr>
            <tr>
                <td>Michael Silva</td>
               <td>12-03-2017</td>
                <td>Basic</td>
                <td>1:00 pm</td>
                <td>₦7,500</td>
                <td>Expired</td>
            </tr>
            <tr>
                <td>Paul Byrd</td>
                <td>12-03-2017</td>
                <td>Basic</td>
                <td>1:00 pm</td>
                <td>₦7,500</td>
                <td>Expired</td>
            </tr>
            <tr>
                <td>Gloria Little</td>
                <td>Systems Administrator</td>
                <td>New York</td>
                <td>59</td>
                <td>3,500d</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Bradley Greer</td>
                <td>Software Engineer</td>
                <td>London</td>
                <td>41</td>
                <td>3,500d</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Dai Rios</td>
                <td>Personnel Lead</td>
                <td>Edinburgh</td>
                <td>35</td>
                <td>3,500</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Jenette Caldwell</td>
                <td>Development Lead</td>
                <td>New York</td>
                <td>30</td>
                <td>3,500d</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Yuri Berry</td>
                <td>Chief Marketing Officer (CMO)</td>
                <td>New York</td>
                <td>40</td>
                <td>3,500</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Caesar Vance</td>
                <td>Pre-Sales Support</td>
                <td>New York</td>
                <td>Reset</td>
                <td>3,500</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Doris Wilder</td>
                <td>Sales Assistant</td>
                <td>Sidney</td>
                <td>Reset</td>
                <td>3,500</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Angelica Ramos</td>
                <td>Chief Executive Officer (CEO)</td>
                <td>London</td>
                <td>Reset</td>
                <td>3,500</td>
                <td>Active00</td>
            </tr>
            <tr>
                <td>Gavin Joyce</td>
                <td>Developer</td>
                <td>Edinburgh</td>
                <td>Reset</td>
                <td>3,500</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Jennifer Chang</td>
                <td>Regional Director</td>
                <td>Singapore</td>
                <td>Reset</td>
                <td>3,500d</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Brenden Wagner</td>
                <td>Software Engineer</td>
                <td>San Francisco</td>
                <td>Reset</td>
                <td>3,500d</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Fiona Green</td>
                <td>Chief Operating Officer (COO)</td>
                <td>San Francisco</td>
                <td>Reset</td>
                <td>3,500d</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Shou Itou</td>
                <td>Regional Marketing</td>
                <td>Tokyo</td>
                <td>Reset</td>
                <td>3,500d</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Michelle House</td>
                <td>Integration Specialist</td>
                <td>Sidney</td>
                <td>Reset</td>
                <td>3,500</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Suki Burks</td>
                <td>Developer</td>
                <td>London</td>
                <td>Reset</td>
                <td>3,500</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Prescott Bartlett</td>
                <td>Technical Author</td>
                <td>London</td>
                <td>Reset</td>
                <td>3,500</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Gavin Cortez</td>
                <td>Team Leader</td>
                <td>San Francisco</td>
                <td>Reset</td>
                <td>3,500</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Martena Mccray</td>
                <td>Post-Sales support</td>
                <td>Edinburgh</td>
                <td>Rese</td>
                <td>3,500</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Unity Butler</td>
                <td>Marketing Designer</td>
                <td>San Francisco</td>
                <td>Reset</td>
                <td>3,500</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Howard Hatfield</td>
                <td>Office Manager</td>
                <td>San Francisco</td>
                <td>Reset</td>
                <td>3,500</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Hope Fuentes</td>
                <td>Secretary</td>
                <td>San Francisco</td>
                <td>Reset</td>
                <td>3,500</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Vivian Harrell</td>
                <td>Financial Controller</td>
                <td>San Francisco</td>
                <td>Reset</td>
                <td>3,500</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Timothy Mooney</td>
                <td>Office Manager</td>
                <td>London</td>
                <td>37</td>
                <td>3,500</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Jackson Bradshaw</td>
                <td>Director</td>
                <td>New York</td>
                <td>65</td>
                <td>3,500</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Olivia Liang</td>
                <td>Support Engineer</td>
                <td>Singapore</td>
                <td>64</td>
                <td>3,500</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Bruno Nash</td>
                <td>Software Engineer</td>
                <td>London</td>
                <td>38</td>
                <td>3,500</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Sakura Yamamoto</td>
                <td>Support Engineer</td>
                <td>Tokyo</td>
                <td>37</td>
                <td>3,500</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Thor Walton</td>
                <td>Developer</td>
                <td>New York</td>
                <td>61</td>
                <td>3,500</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Finn Camacho</td>
                <td>Support Engineer</td>
                <td>San Francisco</td>
                <td>Reset</td>
                <td>3,500</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Serge Baldwin</td>
                <td>Data Coordinator</td>
                <td>Singapore</td>
                <td>64</td>
                <td>3,5004/09</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Zenaida Frank</td>
                <td>Software Engineer</td>
                <td>New York</td>
                <td>63</td>
                <td>3,5001/04</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Zorita Serrano</td>
                <td>Software Engineer</td>
                <td>San Francisco</td>
                <td>56</td>
                <td>3,5006/01</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Jennifer Acosta</td>
                <td>Junior Javascript Developer</td>
                <td>Edinburgh</td>
                <td>43</td>
                <td>3,5002/01</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Cara Stevens</td>
                <td>Sales Assistant</td>
                <td>New York</td>
                <td>46</td>
                <td>3,5002/06</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Hermione Butler</td>
                <td>Regional Director</td>
                <td>London</td>
                <td>Reset</td>
                <td>3,5003/21</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Lael Greer</td>
                <td>Systems Administrator</td>
                <td>London</td>
                <td>21</td>
                <td>3,5002/27</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Jonas Alexander</td>
                <td>Developer</td>
                <td>San Francisco</td>
                <td>30</td>
                <td>3,5007/14</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Shad Decker</td>
                <td>Regional Director</td>
                <td>Edinburgh</td>
                <td>51</td>
                <td>3,5001/13</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Michael Bruce</td>
                <td>Javascript Developer</td>
                <td>Singapore</td>
                <td>29</td>
                <td>3,5006/27</td>
                <td>Active</td>
            </tr>
            <tr>
                <td>Donna Snider</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>3,5001/25</td>
                <td>Active</td>
            </tr>
                    </tbody>
                      <tfoot>
            <tr>
                <th>Card Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Plan</th>
                        <th>Amount </th>
                        <th>Subscription</th>
            </tr>
        </tfoot>
                  </Table>
                
            </Col>
            
          </Row>
        </div>
      </>
    );
  }
}

export default Payment;
