import React from 'react';

class ListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        var demoName = this.props.demoName
        var index = this.props.index;
        console.log("list count = " + demoName)
        return (
            <div>
                <h1>{demoName+index}</h1>
            </div>
        );
    }
}


 export default ListItem;
