import { useSelector, useDispatch } from 'react-redux'
import StyleControlSlice from '../../Slices/StyleControlSlice'
import { Switch, Form } from 'antd';

export default function Component() {
    const styleControl = useSelector((state) => state.styleControl.value)
    const dispatch = useDispatch()
    function onChange(checked) {
        //console.log(`switch to ${checked}`);
        if (checked) {
            //console.log(`dispatch(on())`);
            dispatch(StyleControlSlice.actions.on())
        } else {
            //console.log(`dispatch(off())`);
            dispatch(StyleControlSlice.actions.off())
        }

    }
    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                autoComplete="off"
            >
                <Form.Item
                    label="Контроль зон комфорта"
                    name="styleSwitch"
                >
                    <Switch defaultChecked={styleControl} onChange={onChange} />
                </Form.Item>
            </Form>
        </div>
    )
}