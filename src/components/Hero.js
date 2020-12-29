import React from 'react'
import { Col } from 'antd'

const Hero = ({id, name, description}) => {
    return (
        <Col xs={24} md={12} lg={6}>
            <div className="hero">
                <h3 className="title title--hero">{name}</h3>
                <p>{description}</p>
            </div>
        </Col>
    )
}

export default Hero
