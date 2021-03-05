import React from 'react';
import { Space } from 'antd'
import DContainer from './container'
import { getContainers } from '../../context/setup'
import { ContainerInfo } from 'dockerode'

interface props {

}
interface state {
    data: ContainerInfo[];
}

export default class Canvas extends React.Component<props, state> {

    componentWillMount() {
        this.fillContainers()
    }

    fillContainers = () => {
        const c = getContainers()
        this.setState({ ...this.state, data: c })
    }

    render() {
        const containers = this.state.data
        
        console.log(containers)
        return (
            <Space direction='vertical' >
                <div>
                    {console.log('Inside the Canvas', containers)}
                    {
                        containers.map(c =>
                            <DContainer container={c} />
                        )
                    }
                </div>
            </Space>
        )
    }
}