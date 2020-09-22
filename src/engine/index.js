import React, { Fragment, useState, useEffect, useRef } from 'react';
import { RenderUtil } from 'yuso-util';
import * as yusoWebs from 'yuso-web';
import * as antds from 'antd';
import * as icons from '@ant-design/icons';

const components = {
    Fragment,
    ...icons,
    ...antds,
    ...yusoWebs
}
const Engine = (data) => {
    const [schema, setSchema] = useState(null);

    useEffect(() => {
        setSchema(RenderUtil.recurrenceSchema({...data.schema, reload: (s) => { setSchema({...s}) }}))
    }, [data])

    if (!schema) return null;
    return <div className={data.prefixCls}>
        {RenderUtil.recurrenceRender(components, schema)}
    </div>
}

Engine.defaultProps = {
    prefixCls: 'yuso-engine'
}

export default Engine;