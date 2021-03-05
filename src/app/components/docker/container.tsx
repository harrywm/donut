import React from 'react';
import { Card } from 'antd'
import Dockerode from 'dockerode'

interface props  {
    container: Dockerode.ContainerInfo,
}

export default function DContainer (props: props)  {
    return (
        <Card title={props.container.Names[0]} bordered={true} style={{ width: 300 }}>
            {console.log('here i am dcontainer: ', props.container)}
            <p> {props.container.Names[0]} </p>
            <p> {props.container.Image} </p>
            <p> {props.container.Status} </p>
        </Card>
    )
}