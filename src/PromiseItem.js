import React from 'react';
import _ from 'lodash';
import { urlQuery } from './utils';

const showIds = urlQuery.ids === 'true';

export default (props) => (
    <div className="promise-item">
        <div dangerouslySetInnerHTML={{
            __html: _.get(props.result, "highlight.body", props.result._source.body)
        }} />

        <div className="promise-details">
            {props.result._source.promisor_name}, {props.result._source.parliament_period_name}
            <div style={{float: 'right'}}>ID: {showIds ? props.result._id : null}</div>
        </div>
    </div>
);
