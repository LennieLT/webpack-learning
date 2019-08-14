import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';

class HelloWord extends React.Component {
    render() {
        return <div>
            hello word
        </div>
    }
}

ReactDOM.render(
    <HelloWord />,
    document.getElementById('root')
);

if(module.hot){
    module.hot.accept();
}
