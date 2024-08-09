import axios from 'axios'
import React, { useEffect, useState} from 'react'
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const About = () => {
    const [product, setProducts] = useState([])

    const getapi = async () => {
        try {
            const response = await axios.get("https://renderjsondata.onrender.com/girls")
            setProducts(response.data)
            console.log(response.data);

        } catch (error) {
            console.log("fsdfafkkg", error);

        }
    }
    useEffect(() => {
        getapi()
    },[])

    return (
        <div>
            <div className='row'>
                {
                    product.map((gril)=>(
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={gril.id}>
                        <Card className="w-100 h-100">
                          <img 
                            variant="top" 
                            src={gril.image} 
                            alt={gril.title} 
                            // style={{ height: '250px', objectFit: 'contain', marginTop: '20px' }} 
                          />
                          <Card.Body>
                            <Card.Title style={{ color: 'red' }}>{gril.name}</Card.Title>
                            <Card.Text>
                              <h4>Price: ${gril.price}</h4>
                            </Card.Text>
                            <Card.Text style={{ color: 'red' }}>
                              <h4>Rating: {gril.rating}</h4>
                            </Card.Text>
                            <Card.Text>
                              <h4>ID.{gril.id}</h4>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                    ))
                }
               
            </div>
        </div>
    )
}

export default About
