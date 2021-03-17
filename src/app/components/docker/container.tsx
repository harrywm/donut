import React, { useEffect, useState } from 'react';
import { Card } from 'antd'
import Dockerode, { ContainerInfo } from 'dockerode'

interface props  {
    container: Dockerode.ContainerInfo,
}

export default function DContainer (props: props)  {

    const [container, setContainer] = useState<ContainerInfo>(null)

    useEffect(() => {
        function handleContainerChange(cont: ContainerInfo) {
            setContainer(cont)
        }

        return() => {
            handleContainerChange(props.container)
            console.log(container)
        }
        
    }, [props.container])
    
    return (
        <Card title={container?.Names[0]} bordered={true} style={{ width: 300 }}>
            {console.log('here i am dcontainer: ', container)}
            <p> {container?.Names[0]} </p>
            <p> {container?.Image} </p>
            <p> {container?.Status} </p>
        </Card>
    )
}