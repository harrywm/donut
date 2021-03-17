import React, { } from 'react';
import { Space } from 'antd'
import DContainer from './container'
import { ContainerInfo } from 'dockerode'
import { LoadingOutlined } from '@ant-design/icons';

interface props {
    objectList: ContainerInfo[]
}

interface state {}
export default class Canvas extends React.Component <props, state>{

    constructor(props: props | Readonly<props>) {
        super(props)
    }

    render() {
        return (
            <Space direction='vertical' >
                <div>
                    <DContainer container={this.props.objectList[0]} />
                </div>
            </Space>
        )
    }

}