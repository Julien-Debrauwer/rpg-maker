import { Component } from 'react';
import { Row } from 'antd';
import './main.scss';
import heroes from './heroes';
import Hero from './components/Hero';


console.log();
export default class App extends Component {

  state = {
		// On renseigne un tableau vide qui va accueillir les données de l'API
		heroes
  }
    
    render() {

    const heroesList = this.state.heroes.map((hero) => {
			return(
			
				// remplacement par un appel au composant Member
				<Hero 
					// key est reservé à React, ne pas l'utiliser
					key={hero.id}
					id={hero.id}
					name={hero.name}
          description={hero.description}
				/>
			)
    })
    
    console.log(heroesList);

    return (
      <div className="rpg">
        <header className="App-header">

        </header>
        <main className="container">
          <div className="heroes">
            <Row gutter={24} justify="space-between">
              {heroesList}
            </Row>
          </div>
        </main>
        <footer>

        </footer>
      </div>
    )
  }
}
