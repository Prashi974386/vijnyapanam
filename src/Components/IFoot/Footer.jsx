import React from 'react';
import { MDBBtn, MDBIcon,MDBContainer,MDBRow ,MDBCol,MDBCard} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <>
    <MDBContainer breakpoint="sm"  style={{ borderBottom: '1px solid grey', padding:'20px',borderTop: '1px solid grey', }}>

    <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
    <MDBCol>
       
        <MDBIcon fas icon="map-marker-alt" />
        <span style={{ marginLeft: '8px' }}><b>Address</b></span>
          <p>L.B.Nagar
            Hyderabad
            telanagana  -500035</p>
              
        </MDBCol>

        <MDBCol>
        <div>
        <MDBIcon fas icon="phone-alt" />
        <span style={{ marginLeft: '8px' }}><b>Phone</b></span>
        </div>
         <p>+91 9818224931</p>
          
        </MDBCol>

        <MDBCol>
        
        <div>
  <MDBIcon fas icon="envelope" />
  <span style={{ marginLeft: '8px' }}><b>Email</b></span>
</div>
      <p>nvs@gmail.com</p>
        </MDBCol>

        <MDBCol>
        <MDBBtn className='mx-2' tag='a'  outline floating size='lg'>
        <MDBIcon fab icon='facebook-f' />
      </MDBBtn>
      <MDBBtn className='mx-2' tag='a'  outline floating size='lg'>
        <MDBIcon fab icon='twitter' />
      </MDBBtn>
      <MDBBtn className='mx-2' tag='a'  outline floating size='lg'>
        <MDBIcon  fab icon='youtube' />
      </MDBBtn>
      <MDBBtn className='mx-2' tag='a'  outline floating size='lg'>
        <MDBIcon fab icon='linkedin-in' />
      </MDBBtn>
      </MDBCol>
    </MDBRow>
    </MDBContainer>
      
      
    
    <br />
    <p>© Copyrights. All rights reserved.</p>
  
    </>
  );
}