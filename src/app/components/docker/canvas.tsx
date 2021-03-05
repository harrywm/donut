import React from 'react';
import { Space } from 'antd'
import DContainer from './container'
import { DockerContext, getContainers } from '../../context/setup'
import { ContainerInfo } from 'dockerode'


export default function Canvas() {

    let context: DockerContext = { Containers: [], Networks: [], Images: [] }
    getContainers(context)
    let containers: ContainerInfo[] = context.Containers

    return (
        <Space direction='vertical'>
            {console.log('Inside the Canvas', context.Containers)}
            {  
                containers.map(c => 
                    {console.log('in the map', c)}
                    //<DContainer container={c} />
                    
                )
            }
        </Space>
    )
}