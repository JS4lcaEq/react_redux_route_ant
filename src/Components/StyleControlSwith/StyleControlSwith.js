import { useSelector, useDispatch } from 'react-redux'

export default function Component() {
    const styleControl = useSelector((state) => state.styleControl.value)
    return (
        <div className={styleControl ? 'on' : ''}>
            <div id="m40" className="style-control">40px</div>
            <div id="l-v" className="style-control"></div>
            <div id="l-v-2" className="style-control"></div>
            <div id="r-v" className="style-control"></div>
            <div id="u-h" className="style-control"></div>
            <div id="u-h-2" className="style-control"></div>
            <div id="u-h-3" className="style-control"></div>
        </div>
    )
}