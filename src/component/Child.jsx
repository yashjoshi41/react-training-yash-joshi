import React from 'react';

class Child extends React.PureComponent{
    
    render() {
    const {name, changeName} = this.props;
    return (  
        <div>
            <h1>Hello {name}!</h1>
            <button onClick={changeName}>Change Name</button>
        </div>
    );
    }
}
 
export default Child;
