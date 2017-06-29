import * as React from 'react';
import * as ReactDom from 'react-dom';

class Hello extends React.Component<any, any> {
    render() {
        return (
            <h1>
                Hello yo!
            </h1>
        )
    }
}

ReactDom.render(<Hello />, document.querySelector('.app-container'));
