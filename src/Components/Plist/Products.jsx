// import React, { useState } from 'react';
// import {
//   MDBCard,
//   MDBCardImage,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBRow,
//   MDBCol,
//   MDBBtn
// } from 'mdb-react-ui-kit';

// export default function Products() {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleHover = () => {
//     setIsHovered(!isHovered);
//   };

//   const buttonStyle = {
//     opacity: isHovered ? 1 : 0,
//     pointerEvents: isHovered ? 'auto' : 'none',
//   };


//   const cardStyle = {
//     transition: 'transform 0.3s', // Add a smooth transition effect
//     transform: isHovered ? 'scale(0.9)' : 'scale(1)', // Adjust the scale as needed
//   };
//   return (
//     <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
//       <MDBCol>
//         <MDBCard>
//           <MDBCardImage
//             src='https://mdbootstrap.com/img/new/standard/city/041.webp'
//             alt='...'
//             position='top'
//           />
//           <MDBCardBody>
//             <MDBCardTitle>Card title</MDBCardTitle>
//             <MDBCardText>
//               This is a longer card with supporting text below as a natural lead-in to additional content.
//               This content is a little bit longer.
//             </MDBCardText>

//             <MDBBtn href='#'>View Details</MDBBtn>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol>
//       <MDBCol>
//         <MDBCard>
//           <MDBCardImage
//             src='https://mdbootstrap.com/img/new/standard/city/042.webp'
//             alt='...'
//             position='top'
//           />
//           <MDBCardBody>
//             <MDBCardTitle>Card title</MDBCardTitle>
//             <MDBCardText>
//               This is a longer card with supporting text below as a natural lead-in to additional content.
//               This content is a little bit longer.
//             </MDBCardText>
//             <MDBBtn href='#'>View Details</MDBBtn>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol>
//       <MDBCol>
//         <MDBCard style={cardStyle} onMouseEnter={handleHover} onMouseLeave={handleHover}>
//           <MDBCardImage
//             src='https://mdbootstrap.com/img/new/standard/city/043.webp'
//             alt='...'
//             position='top'
//           />
//           <MDBCardBody>
//             <MDBCardTitle>Card title</MDBCardTitle>
//             <MDBCardText>
//               This is a longer card with supporting text below as a natural lead-in to additional content.
//               This content is a little bit longer.
//             </MDBCardText>
//             <MDBBtn href='#'>View Details</MDBBtn>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol>
//       <MDBCol>
//         <MDBCard style={cardStyle} onMouseEnter={handleHover} onMouseLeave={handleHover}>
//           <MDBCardImage
//             src='https://mdbootstrap.com/img/new/standard/city/044.webp'
//             alt='...'
//             position='top'
//           />
//           <MDBCardBody>
//             <MDBCardTitle>Card title</MDBCardTitle>
//             <MDBCardText>
//               This is a longer card with supporting text below as a natural lead-in to additional content.
//               This content is a little bit longer.
//             </MDBCardText>
//             <MDBBtn href='#'>View Details</MDBBtn>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol>
//     </MDBRow>
//   );
// }


import React, { useState } from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';

const ProductCard = ({ index, title, imageSrc, description }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

   const buttonStyle = {
    opacity: hovered ? 1 : 0,
    pointerEvents: hovered ? 'auto' : 'none',
  };

  return (
    <MDBCol key={index}>
      <MDBCard
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        style={{
          transition: 'transform 0.3s',
          transform: hovered ? 'scale(0.9)' : 'scale(1)',
        }}
      >
        <MDBCardImage src={imageSrc} alt={`Card ${index}`} position='top' />
        <MDBCardBody>
          <MDBCardTitle>{title}</MDBCardTitle>
          <MDBCardText>{description}</MDBCardText>
          <MDBBtn href='#' style={buttonStyle} disabled={!hovered}>
            View Details
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default function Products() {
  const productsData = [
    { index: 1, title: 'Product 1', imageSrc: 'https://mdbootstrap.com/img/new/standard/city/044.webp', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet sint nulla in magni suscipit? Blanditiis sint porro ipsum quidem minus perspiciatis ex illum suscipit delectus nemo repellendus, laudantium cumque est?' },
    { index: 2, title: 'Product 2', imageSrc: 'https://mdbootstrap.com/img/new/standard/city/043.webp', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet sint nulla in magni suscipit? Blanditiis sint porro ipsum quidem minus perspiciatis ex illum suscipit delectus nemo repellendus, laudantium cumque est?' },
    { index: 2, title: 'Product 3', imageSrc: 'https://mdbootstrap.com/img/new/standard/city/042.webp', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet sint nulla in magni suscipit? Blanditiis sint porro ipsum quidem minus perspiciatis ex illum suscipit delectus nemo repellendus, laudantium cumque est?' },
    { index: 2, title: 'Product 4', imageSrc: 'https://mdbootstrap.com/img/new/standard/city/041.webp', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet sint nulla in magni suscipit? Blanditiis sint porro ipsum quidem minus perspiciatis ex illum suscipit delectus nemo repellendus, laudantium cumque est?' }

    // Add more product data as needed
  ];

  return (
    <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
      {productsData.map((product) => (
        <ProductCard key={product.index} {...product} />
      ))}
    </MDBRow>
  );
}

