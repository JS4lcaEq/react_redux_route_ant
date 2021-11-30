import { useState } from 'react';
import { Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch, } from 'antd';
import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined, SmileTwoTone, HeartTwoTone, CheckCircleTwoTone
} from '@ant-design/icons';

import './Ant.css'



export default function Component() {
    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    return (
        <div>
            <Button type="primary">Button</Button>
            <div className="icons-list">
                <HomeOutlined />
                <SettingFilled />
                <SmileOutlined />
                <SyncOutlined spin />
                <SmileOutlined rotate={180} />
                <LoadingOutlined />
            </div>
            <div className="icons-list">
                <SmileTwoTone />
                <HeartTwoTone twoToneColor="#eb2f96" />
                <CheckCircleTwoTone twoToneColor="#52c41a" />
            </div>
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
            >
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Input">
                    <Input />
                </Form.Item>
                <Form.Item label="Select">
                    <Select>
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="TreeSelect">
                    <TreeSelect
                        treeData={[
                            {
                                title: 'Light',
                                value: 'light',
                                children: [
                                    {
                                        title: 'Bamboo',
                                        value: 'bamboo',
                                    },
                                ],
                            },
                        ]}
                    />
                </Form.Item>
                <Form.Item label="Cascader">
                    <Cascader
                        options={[
                            {
                                value: 'zhejiang',
                                label: 'Zhejiang',
                                children: [
                                    {
                                        value: 'hangzhou',
                                        label: 'Hangzhou',
                                    },
                                ],
                            },
                        ]}
                    />
                </Form.Item>
                <Form.Item label="DatePicker">
                    <DatePicker />
                </Form.Item>
                <Form.Item label="InputNumber">
                    <InputNumber />
                </Form.Item>
                <Form.Item label="Switch" valuePropName="checked">
                    <Switch />
                </Form.Item>
                <Form.Item label="Button">
                    <Button>Button</Button>
                </Form.Item>
            </Form>
        </div>
    )
}