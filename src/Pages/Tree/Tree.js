import { useState } from 'react';
import { Button } from 'antd';
import { Tree, Input } from 'antd';
import './Tree.css'

export default function Component() {
    const [count, setCount] = useState(0);
    const [totalCount, setTC] = useState(0);
    const [sm, setSM] = useState(3);
    const [lm, setLM] = useState(10001);
    const [lv, setLV] = useState(2);
    const [data, setData] = useState([]);
    let cnt = 0
    function dig(path = 'root', level = 2) {
        const list = [];
        let max = sm
        if (level == 0) {
            max = lm
        }
        for (let i = 0; i < max; i += 1) {
            const key = `${path}-${i}`;
            cnt++
            const treeNode = {
                title: `${key} level: ${level} total count: ${cnt}`,
                key,
            };
            list.push(treeNode);
            if (cnt > 100000) {
                treeNode.title = "Too much nodes!!!"
                setTC(cnt)
                return list
            }
            if (level > 0) {
                treeNode.children = dig(key, level - 1);
            }

            

            


        }
        setTC(cnt)
        return list;
    }

    //const treeData = dig();

    return (
        <div>
            <Input.Group compact>
                <Input addonBefore=" &nbsp; Уровней:" style={{ width: 'calc(150px)' }} value={lv} onChange={(event) => { setLV(event.target.value) }} />
                <Input addonBefore=" &nbsp; Маленькая ветка:" style={{ width: 'calc(200px)' }} value={sm} onChange={(event) => { setSM(event.target.value) }} />
                <Input addonBefore=" &nbsp; Большая ветка:" style={{ width: 'calc(300px)' }} value={lm} onChange={(event) => { setLM(event.target.value) }} />
                <Input addonBefore=" &nbsp; узлов:" style={{ width: 'calc(150px)' }} value={totalCount} disabled  />
                <Button type="primary" onClick={() => { setData(dig("root", lv)); setCount(count + 1); }}>Сгенерировать дерево # {count}</Button>
            </Input.Group>

            <div className="tree-box">
                <Tree treeData={data} height={555} defaultExpandAll={false}  />
            </div>

        </div>
    )
}