import React from 'react';

class AccordionComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjects: [
        {
          id: 1,
          title: 'Casading Style Sheets',
          content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error pariatur, natus eaque necessitatibus aperiam nam? Accusamus molestias eveniet tempora aut exercitationem facilis suscipit alias aperiam saepe mollitia asperiores dicta dolor ullam repellendus natus, odio illo sapiente ad, neque soluta perferendis sint? Pariatur enim maxime id?",
          isActive: false
        },
        {
          id: 2,
          title: 'Javacript',
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore harum, molestias delectus odio, accusamus reprehenderit fugit numquam sequi expedita minus doloremque suscipit optio explicabo. Accusantium enim ab a vel.",
          isActive: false
        },
        {
          id: 3,
          title: 'Ruby',
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore harum, molestias delectus odio, accusamus reprehenderit fugit numquam sequi expedita minus doloremque suscipit optio explicabo. Accusantium enim ab a vel.",
          isActive: true
        }
      ],
      currTopic: 3
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(topic) {
    this.setState((prevState) => {
      let subjects = prevState.subjects;
      let arrLen = subjects.length;
      let currTopic = prevState.currTopic;

      for (let i = 0; i < arrLen; i++) {
        // If current topic is the same as the topic clicked, close the info
        if (subjects[i].id === topic.id && currTopic === topic.id) {
          subjects[i].isActive = !subjects[i].isActive;

        // Find the id clicked in the array and toggle its isActive parameter
        } else if (subjects[i].id === topic.id) {
          console.log(currTopic);
          subjects[currTopic -1].isActive = false;
          subjects[i].isActive = true;
          prevState.currTopic = topic.id;
        }
      }
      return prevState;
    });
  }
  render() {
    return this.state.subjects.map((topic) => {      
      return(
          <section key={ topic.id }>
            <div className="subject-header" onClick={ ()=> this.handleClick(topic) }>
              <h1>{ topic.title }</h1>
            </div>
            <div className={ `subject-content ${ topic.isActive ? 'show' : 'hide' }`}>
              <p>{ topic.content }</p>
            </div>
          </section>
      )
    })
  }
}

export default AccordionComp;