import React, { Component } from 'react'   //imrc

//cc
class Counter extends Component {

    //property
    state = {
        count: 0,
        tags:['tag1','tag2','tag3']
    };
    handleIncrement= product =>{
        console.log(product);
        this.setState({count: this.state.count + 1});
    }
   
    render() { 
        return (
            //to double select CTRL+D
        <div>
            
            <span className={this.setBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={(product) => this.handleIncrement(product)} className='btn btn-secondary btn-sm'>Increment</button>

            <ul>
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>


        </div>
        );
    }

    formatCount(){
        //object destructuring
        const {count} = this.state;

       // return count === 0 ? <h1>Zero</h1> : count;
        return count === 0 ? 'Zero' : count;
    }

    setBadgeClasses(){
        let classes = 'badge m-2 badge-';
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
    }
    

    

}
 
export default Counter;