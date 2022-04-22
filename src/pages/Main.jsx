import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Header from "../components/Header/Header";
import Image from "../components/Image/Image";
import Nav from "../components/Nav/Nav";
import { useFile} from "../components/Providers/FileProvider";
import Result from "../components/Result/Result";
import {useData} from '../components/Providers/DataProvider';

import './Main.css'

const Main = () => {

  const [file] = useFile();
  const [image,setImage] = useState();
  const [data,setData] = useData();

  console.log(data)

  useEffect(()=>{
    if(file){
      const fileReader = new FileReader();
      fileReader.onload = ()=>{
          setImage(fileReader.result);
      }
      fileReader.readAsDataURL(file);
  }
  },[file])

  return (
    <div className="d-flex " style={{ minHeight: "100vh" }}>
      <div className="w-20">
        <Nav />
      </div>
      <div className="text-center py-3 fs-3 fw-bold w-80" >
        <Header>Acute Leukemia Prediction From Blood Cell Images</Header>
        <Row className="m-0">
          <Col sm={12} md={6} lg={3}>
            <Image
              text="Input Image"
              src={image}
            />
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Image text="Segmented Image" />
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Image text="Contour Detected Image"/>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Image text="Thresholded Image"/>
          </Col>
          <Col sm={12} md={6} lg={3} >
            <Image text="Color Masked Image"/>
          </Col>
        </Row>
        <Row className=" m-0 justify-content-end pb-10">
          
          <Col sm={12} md={6} lg={4}>
          <Result/>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Main;
