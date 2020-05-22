import React from 'react'
import {Card, CardBody, CardTitle, CardText} from "reactstrap"
import {FaAward, FaEnvelope, FaMapMarkedAlt, FaPhone} from "react-icons/fa"


const MyCard = ({details}) => {
    return (
        <Card>
            <CardBody className="text-center">
                <img 
                height="150" 
                width="150" 
                className="rounded-circle img-thumbnail border-danger"
                src={details.picture?.large}
                alt="profile pic"
                />
                <CardTitle className="text-primary">
                    <h1>
                        <span className="pr-2">{details.name?.title}</span>
                        <span>{details.name?.first}</span>
                        <span>{details.name?.last}</span>
                    </h1>
                </CardTitle>
                <CardText>
                    <FaMapMarkedAlt className="pr-1"/>
                    {details.location?.city}
                    <br />
                    <FaPhone className="pr-1"/>
                    {details.phone}
                    <br />
                    <FaEnvelope className="pr-1"/>
                    {details.email}
                    <br />
                    <FaAward className="pr-1"/>
                    {details.dob?.age}
                </CardText>
            </CardBody>
        </Card>
    )
}
export default MyCard;