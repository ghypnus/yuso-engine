import React, { Fragment, useState } from 'react';
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

export default props => {
    let { prefixCls = 'yuso-web' } = props;
    const [schema, setSchema] = useState(RenderUtil.recurrenceSchema({
        ...props.schema,
        reload: (s) => { setSchema({ ...s }) }
    }));

    if (!schema) return null;
    console.time('render');
    const Children = RenderUtil.recurrenceRender(components, schema);
    console.timeEnd("render");
    return <div className={prefixCls}>
        {Children}
    </div>
}