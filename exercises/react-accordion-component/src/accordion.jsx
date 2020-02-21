import React from 'react';

class AccordionComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }
  render() {
    return(
      <section>
        <div className="subject-header">
          <h1>Cascading Style Sheets</h1>
        </div>
        <div className="subject-content">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero officiis doloribus animi est aut dignissimos repellat ut officia, nobis consequuntur ipsum quis deserunt voluptate nisi reiciendis velit itaque. Facere sint voluptas, voluptates voluptatum nam, impedit ad dignissimos aliquid quos iusto suscipit voluptatibus ipsa libero temporibus similique odio, error doloribus minus ex ipsam sed iste. Accusantium cupiditate sint, quam nemo officiis nobis blanditiis culpa tempora praesentium nisi quos! Deserunt quam consequuntur at facilis neque nesciunt porro!
          </p>
        </div>
      </section>
    )
  }
}

export default AccordionComp;