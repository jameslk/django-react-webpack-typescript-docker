import * as React from 'react';
import * as ReactDom from 'react-dom';

class Hello extends React.Component<any, any> {
    render() {
        return (
            <div>
                <button className="btn btn-primary">
                    Henlo
                </button>
            </div>
        )
    }
}

ReactDom.render(<Hello />, document.querySelector('.app-container'));
