import React, { Component} from 'react'
import fire from  './Fire'


class Home extends Component {
    constructor(props) {
        super(props);
        this.logout= this.logout.bind(this);
    }

logout(){
    fire.auth().signOut();
}


render() { 
    return (
       <div className="col-md-6">
      
           <h1>you are now in home</h1>
           <button onClick={this.logout}>Logout</button>
        </div>

  );
}
}

export default Home;
