

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    const [products, setProducts] = useState([]);
    const [productFilter, setProductFilter] = useState([]);
    const [search, setSearch] = useState("");
    // const [loading , setLoading]=useState(false)
    const getData = async () => {
        try {
            // setLoading(true)
            let res = await axios.get("https://fakestoreapi.com/products");
            setProducts(res.data);
            setProductFilter(res.data);
            // setLoading(false)
        } catch (error) {
            console.log(error);
        }
    };

    const handleFilterRatingAbove3 = () => {
        const filteredData = products.filter(product => product.rating.rate > 3);
        setProductFilter(filteredData);
        console.log(filteredData);
    };

    const handleFilterRatingAbove4 = () => {
        const filteredData = products.filter(product => product.rating.rate > 4);
        setProductFilter(filteredData);
        console.log(filteredData);
    };

    const handleFilterPrice = () => {
        const filteredData = products.filter(product => product.price > 100);
        setProductFilter(filteredData);
        console.log(filteredData);
    };

    useEffect(() => {
        getData();
    }, []);

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearch(value);
        const filtered = products.filter(product =>
            product.title.toLowerCase().includes(value)
        );
        setProductFilter(filtered);
    };

    const handleReset = () => {
        setSearch("");
        setProductFilter(products);
    };

    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <div className='d-flex flex-column flex-md-row align-items-center'>
                        <span className="me-md-3">Total Filtered Products: {productFilter.length}</span>
                        {/* <span className="me-md-3">Filter Price: {productFilter.length}</span> */}

                        <span>Total Products: {products.length}</span>
                    </div>
                    <div className="d-flex">
                        <button onClick={handleFilterRatingAbove3} className="btn btn-outline-primary me-2">Rating Above 3</button>
                        <button onClick={handleFilterRatingAbove4} className="btn btn-outline-primary me-2">Rating Above 4</button>
                        <button onClick={handleFilterPrice} className="btn btn-outline-primary me-2">Price Above 100</button>
                        <button className="btn btn-outline-danger" onClick={handleReset}>Reset</button>
                    </div>
                </div>
            </nav>
            <Card className="my-3 w-100">
                <form className="d-flex p-3">
                    <input
                        className="form-control me-2 w-100"
                        type="search"
                        placeholder="Search"
                        value={search}
                        onChange={handleSearch}
                    />
                    <Button className="btn btn-success me-2" onClick={handleSearch}>Search</Button>
                    <Button className="btn btn-secondary" onClick={handleReset}>Reset</Button>
                </form>
            </Card>
            <div className="row">
                {/* {loading} */}
                {productFilter.map((product) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={product.id}>
                        <Card className="w-100 h-100">
                            <Card.Img 
                                variant="top" 
                                src={product.image} 
                                alt={product.title} 
                                style={{ height: '250px', objectFit: 'contain', marginTop:'20px',}} 
                            />
                            <Card.Body>
                                <Card.Title style={{color:'red'}}>{product.title}</Card.Title>
                                <Card.Text>
                                   <h4> Price: ${product.price}</h4>
                                </Card.Text>
                                <Card.Text style={{color:'red'}}>
                                <h4>  Rating:{product.rating.rate}</h4>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            
            </div>
        </div>
    );
};

export default Header;
