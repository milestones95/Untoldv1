import React, { Component } from 'react';

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

  }

  removeItem(itemId) {

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
