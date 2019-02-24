import React, {Component} from "react";
import NoBlackData from './NoBlackData';
import PropTypes from 'prop-types';

class BlackCard extends Component {
  render() {

    const {blackResults} = this.props;
    const blackId = this.props.match.params.id;

    if (blackResults.length === 0 || blackId >= blackResults.length) {
      return <NoBlackData />;
    } else {
      const selectedPerson = blackResults[blackId];
      const fullName = `${selectedPerson.name.first} ${selectedPerson.name.last}`;
      const image = selectedPerson.picture.large;
      const age = selectedPerson.dob.age;
      const city = selectedPerson.location.city;
  
      return (
        <div className="person person--detail">
          <h2 className="person__name">{fullName}</h2>
          <img className="person__image" src={image} alt={fullName} />
          <div className="person__age">{age}</div>
          <div className="person__city">{city}</div>
        </div>
      );
    }
  }
}

BlackCard.propTypes = {
    blackResults : PropTypes.arrayOf(PropTypes.object),
    match: PropTypes.object.isRequired
}
export default BlackCard;