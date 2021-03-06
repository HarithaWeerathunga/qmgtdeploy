import React from 'react';
import {
  Route, 
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import axios from 'axios';

import './App.css';
import Home from './Home';
import HomeGrid from './HomeGrid';
import Player from './Player';
import Landing from './Landing';

import Player1 from './Player1';
import Player4 from './Player4';
import Player8 from './Player8';






function App(){

  return(

    <Router>
   
      <Switch>
        
        <Route exact path="/" component={Landing}></Route>
        {/* <Route path="/:id" component={Player}></Route> */}
        <Route path="/1" component={Player1}></Route>
        <Route path="/4" component={Player4}></Route>
        <Route path="/8" component={Player8}></Route>
       
       
        
         
        {/* <Route path="/video1" component={Player}></Route> */}
        
      </Switch>
      
    </Router>
    



  )
}


export default App;


// class App extends React.Component {


//   state = {
//     title:'',
//     body:'',
//     posts:[],
//     videos:[]
//   };


//   componentDidMount = () => {
//     this.getBlogPost();
//     this.getVideoData();
//   }


//   getBlogPost = () => {
//     axios.get('/api')
//     .then((response) => {
//       const data = response.data;
//       this.setState({posts:data});

//       console.log('data has been received');
//     })
//     .catch(()=> {
//       alert('error');
//     });
//   }


//   getVideoData = () => {
//     axios.get('api/videos')
//     .then((response) => {
//       const data = response.data;
//       this.setState({videos:data});

//       console.log('data has been received');
//     })
//     .catch(()=> {
//       alert('error');
//     });
//   }


//   handleChange = ({target}) => {
//       const {name,value} = target;

//       this.setState({
//         [name] : value 
//       });


//   };

//   submit = (event) => {
//       event.preventDefault();

//       const payload = {
//         title: this.state.title,
//         body: this.state.body
//       };

//       axios({
//         url:'/api/save',
//         method: 'POST',
//         data: payload
//       })
//       .then(()=>{
//         console.log('Data has been sent to the server');
//         this.resetUserInputs();
//         this.getBlogPost();
//       })
//       .catch(()=> {
//         console.log('error')
//       })




//   };

//   resetUserInputs = () => {
//     this.setState({
//       title: '',
//       body: ''
//     });
//   };

//   displayBlogPost = (posts) => {
//     if(!posts.length) return null;

//     return posts.map((post,index) => {
//       <div key={index} className="blog-post__display">
//         <h3>{post.title}</h3>
//         <p>{post.body}</p>
//       </div>
//     });
//   };


//   render(){


//     console.log('State', this.state);

//     return(
//       <div className="app">
//         <h1>Queue Management System</h1>
//         <form onSubmit={this.submit}>
//           <div className="form-input">
//             <input
//               type="text"
//               name="title"
//               value={this.state.title}
//               onChange={this.handleChange}
//               />
//           </div>
//           <div className="form-input">

//             <textarea name="body" cols="30" rows="10" value={this.state.body} onChange={this.handleChange}></textarea>
//           </div>

//           <button>Submit</button>
//         </form>


//         <div className="blog-">
//           {this.displayBlogPost(this.state.posts)}
//         </div>
//       </div>
//     )
//   }
// }


// export default App;