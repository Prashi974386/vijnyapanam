import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export default function AboutUs() {
  return (
    <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://i.pinimg.com/736x/72/ed/3a/72ed3a4ee99cdd29917b5affcafa2e63.jpg'
            alt='...'
            position='top'
          />
        </MDBCard>
      </MDBCol>

      <MDBCol>
        
           
          <MDBCardBody>
            {/* <MDBCardTitle>Card title</MDBCardTitle> */}
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus suscipit perferendis esse cum inventore neque omnis libero a quam excepturi expedita animi itaque architecto ab impedit fuga corrupti, quasi dolor.
            </MDBCardText>

            <MDBCardText>
             
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus suscipit perferendis esse cum inventore neque omnis libero a quam excepturi expedita animi itaque architecto ab impedit fuga corrupti, quasi dolor.
            </MDBCardText>
          </MDBCardBody>
        
      </MDBCol>


     
    </MDBRow>
  );
}