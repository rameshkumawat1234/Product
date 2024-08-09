// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Card ,CardImg} from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import React from 'react'
// import Header from './Header'

// const Home = () => {
//   const [productdata, setProductdata] = useState([])

//   const getData = async () => {
//     try {
//       const response = await axios.get('https://renderjsondata.onrender.com/women')

//       setProductdata(response.data)
//       console.log(response.data);

//     } catch (error) {
//       console.log(error);

//     }
//   }
//   useEffect(() => {
//     getData()
//   }, [])

//   return (
//     <div>
//       <Header/>

      
//       <div className='row'>
//         {
//           productdata.map((woman) => (
//             <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
//               <card className="w-100 h-100">
//                 <CardImg 
//                   variant="top"
//                   src={woman.image}
//                   alt={woman.title}
//                   // style={{ height: '250px', objectFit: 'contain', marginTop: '20px', }}
//                   />
//                 <Card.Body>
//                   <Card.Title style={{ color: 'red' }}>{woman.name}</Card.Title>
//                   <Card.Text>
//                     <h4> Price: ${woman.price}</h4>
//                   </Card.Text>
//                   <Card.Text style={{ color: 'red' }}>
//                     <h4>  Rating:{woman.rating}</h4>
//                     <h4>  id:{woman.id}</h4>
//                   </Card.Text>
//                 </Card.Body>
//               </card>
//             </div>
//           ))
//         }

//       </div>
//     </div>
//   )
// }

// export default Home




import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import About from './About';

const Home = () => {
  const [productdata, setProductdata] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get('https://renderjsondata.onrender.com/women');
      setProductdata(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header />

      <div className="row">
        {productdata.map((woman) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={woman.id}>
            <Card className="w-100 h-100">
              <Card.Img 
                variant="top" 
                src={woman.image} 
                alt={woman.title} 
                // style={{ height: '250px', objectFit: 'contain', marginTop: '20px' }} 
              />
              <Card.Body>
                <Card.Title style={{ color: 'red' }}>{woman.name}</Card.Title>
                <Card.Text>
                  <h4>Price: ${woman.price}</h4>
                </Card.Text>
                <Card.Text style={{ color: 'red' }}>
                  <h4>Rating: {woman.rating}</h4>
                </Card.Text>
                <Card.Text>
                  <h4>ID: {woman.id}</h4>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <About/>
    </div>
  );
};

export default Home;
