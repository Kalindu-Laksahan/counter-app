import React, { Component } from 'react'   //imrc

//cc
class CounterPro extends Component {

    //property
    state = {
        count: 0,
        tags:['tag1','tag2','tag3']
    };

    //conditional rendering
    renderTags(){
        if(this.state.tags.length === 0) return <p>There are no tags!</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }
   
    render() { 
        return (
            //to double select CTRL+D
        <div>
            
            {this.state.tags.length === 0 && 'Please create a new tag!'}
            {this.renderTags()}
        </div>
        );
    }

    

}
 
export default CounterPro;