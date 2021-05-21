import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase.js';
import "firebase/firestore";

const ref = firebase.firestore().collection('Stories');


class App extends Component {
  constructor() {
    super();
    this.state = {
      orientation: '',
      name: '',
      email:'',
      cheatingCategory: '',
      loverName: '',
      partnerName: '',
      items: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const currentDate = new Date();
    const timestamp = currentDate.getTime();

    const item = {
      orientation: this.state.orientation,
      cheatingCategory: this.state.cheatingCategory,
      name: this.state.name,
      loverName: this.state.loverName,
      partnerName: this.state.partnerName,
      email: this.state.email
    }

    const userRef = firebase.firestore().collection('Users').add({
      Orientation: item.orientation,
      Name: item.name,
      email: item.email,
      cheatingCategory: item.cheatingCategory,
      LoverName: item.loverName,
      PartnerName: item.partnerName,
      Timestamp: currentDate
    });


    ref.where('orientation', '==', item.orientation).onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        //call parser function
         const personalizedStory = this.parseTemplate(doc.data().content, item)
        items.push(doc.data());

        const userStoryRef = firebase.firestore().collection('UserStories').add({
          StoryName: doc.data().Storyname,
          Content: personalizedStory,
          userId: item.email,
          Timestamp: currentDate
        });
      });
    });

    this.setState({
      orientation: '',
      name: '',
      email: '',
      cheatingCategory: '',
      loverName: '',
      partnerName: ''
    });
  }
  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user
        });
      }
      this.setState({
        items: newState
      });
    });
  }

  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }

 parseTemplate(story, item){
    const partnerReplaced = story.replaceAll('{Partner Name}', item.partnerName);
    const nameReplaced = partnerReplaced.replaceAll('{Name}', item.name);
    const loverNameReplaced = nameReplaced.replaceAll('{Lover Name}', item.loverName);

    return loverNameReplaced;
  }

  render() {
    return (
      <div className='app'>
        <header>
            <div className="wrapper">
              <h1>Fun Food Friends</h1>

            </div>
        </header>
        <div className='container'>
          <section className='add-item'>
                <form onSubmit={this.handleSubmit}>
                  <input type="text" name="name" placeholder="What's your name?" onChange={this.handleChange} value={this.state.name} />
                  <input type="text" name="email" placeholder="What's your email?" onChange={this.handleChange} value={this.state.email} />
                  <input type="text" name="orientation" placeholder="Orientation" onChange={this.handleChange} value={this.state.orientation} />
                  <input type="text" name="loverName" placeholder="LoverName" onChange={this.handleChange} value={this.state.loverName} />
                  <input type="text" name="partnerName" placeholder="PartnerName" onChange={this.handleChange} value={this.state.partnerName} />
                  <input type="text" name="cheatingCategory" placeholder="Cheating Category" onChange={this.handleChange} value={this.state.cheatingCategory} />
                  <button>Sign up</button>
                </form>
          </section>
          <section className='display-item'>
              <div className="wrapper">
                <ul>
                  {this.state.items.map((item) => {
                    return (
                      <li key={item.id}>
                        <h3>{item.title}</h3>
                        <p>brought by: {item.user}
                          <button onClick={() => this.removeItem(item.id)}>Remove Item</button>
                        </p>
                      </li>
                    )
                  })}
                </ul>
              </div>
          </section>
        </div>
      </div>
    );
  }
}
export default App;
