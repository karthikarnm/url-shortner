class RandomClass extends React.Component{ 
    constructor(){ 
    super(); 
    this.state={ 
    click :0 
    }; 
    this.increment=this.increment.bind(this); 
    } 
    increment(){ 
    this.setState({count : this.state.click +1}); 
    } 
    render(){ 
    return ( 
    <div> 
    <h2> {this.state.click}</h2> 
    <button onClick={this.increment}> CLICK ME</button> 
    </div> 
    ) 
    } 
    } 
    export default RandomClass;