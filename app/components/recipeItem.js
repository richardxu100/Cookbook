import React, { PropTypes } from 'react';
import { Card, CardHeader, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import styles from '../styles/styles';

const RecipeItem = (props) => {
  return (
    <Card style={styles.recipeCard}>
      <CardHeader
        title="Recipe Name"
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardMedia
        expandable={true}
      >
        <img src="http://i.dailymail.co.uk/i/pix/2016/05/18/15/3455092D00000578-3596928-image-a-20_1463582580468.jpg" />
      </CardMedia>
      <CardTitle expandable={true} title="Ingredients" />
      <CardText expandable={true}>
        #1. Thing
      </CardText>
      <CardText expandable={true}>
        #2. Another Thing
      </CardText>
      <CardActions>
        <FlatButton label="Edit" />
        <FlatButton label="Delete" />
      </CardActions>
    </Card>
  )
}

RecipeItem.PropTypes = {

}

export default RecipeItem;
