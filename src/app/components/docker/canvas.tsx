import React, { useEffect, useState } from 'react';
import { Space } from 'antd'
import DContainer from './container'
import { getContainers } from '../../context/setup'
import { ContainerInfo } from 'dockerode'
import { render } from 'react-dom';

export default function Canvas() {

    const [dData, setdData] = useState<ContainerInfo[]>([])

    useEffect(() => {
        getContainers().then(conts => setdData(conts))
        console.log(dData)
    }, [])

    return (
        <Space direction='vertical' >
            <div>
                {
                    dData.map((c: ContainerInfo) => (
                        <DContainer container={c} />)
                    )
                }
            </div>
        </Space>
    )

}