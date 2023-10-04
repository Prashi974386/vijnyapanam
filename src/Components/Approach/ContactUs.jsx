import React from 'react';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBContainer
} from 'mdb-react-ui-kit';

export default function ContactUs() {
  return (
    <MDBContainer breakpoint="sm" style={{ height: '75vh', width: '40vw', margin: '20px auto' }}>
    <form>
      <MDBInput id='form4Example1' wrapperClass='mb-4' label='Name'   style={{ height: '3.5em' }} />
      <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email address'   style={{ height: '3.5em' }}/>
      <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Message'  style={{ height: '8em' }} />
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '20vh' }}>
      <MDBBtn
        type='submit'
        className='mb-4'
        color='success'
        style={{ height: '3em', width: '10em', minWidth: '8em', fontSize: '1rem' }}
      >
        Submit
      </MDBBtn>
    </div>
    </form>
    </MDBContainer>
  );
}