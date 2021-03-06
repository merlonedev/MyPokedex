import React, { Component } from 'react';
import Type from './Type';

export class PokemonCard extends Component {
  render() {
    const {name, weight, sprites, className, types } = this.props;
    const typeObj = Object.values(types);
    return (
      <div className={`${className} poke-card`}>
        <h2 className="poke-name">{name}</h2>
        <div className="poke-info">
          <div>
            <div className="poke-sub-info">
              <label className="info-label">Type:</label>
              {typeObj.map((type, i) => <Type key={i} type={type.type.name} />)}
            </div>
            <div className="poke-sub-info">
              <label className="info-label">Weight:</label>
              <p className="poke-weight">{weight}lb</p>
            </div>
          </div>
          <img className="poke-sprite" src={sprites} alt="sprite" />
        </div>
      </div>
    )
  }
}

export default PokemonCard;
