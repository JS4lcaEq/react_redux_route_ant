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
import * as i from '@ant-design/icons';

// import locale from 'antd/es/date-picker/locale/ru_RU';

import './Ant.css'



export default function Component() {
    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    return (
        <div>

            <div className="icons-list">
                <i.HomeOutlined /> &nbsp;
                <i.SettingFilled /> &nbsp;
                <i.SmileOutlined /> &nbsp;
                <i.SyncOutlined spin /> &nbsp;
                <i.SmileOutlined rotate={180} /> &nbsp;
                <i.LoadingOutlined /> &nbsp;
                <i.SmileTwoTone /> &nbsp;
                <i.HeartTwoTone twoToneColor="#eb2f96" /> &nbsp;
                <i.CheckCircleTwoTone twoToneColor="#52c41a" />                
            </div>

            <hr />
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
                    <DatePicker  />
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