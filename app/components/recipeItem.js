import React, { PropTypes } from 'react';
import { Card, CardHeader, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ModalForm from '../containers/ModalForm';
import styles from '../styles/styles';

const RecipeItem = ({ toggleEditOpen, name, ingredients, imageURL, deleteRecipe, id, isOpen, onEditRecipe }) => {
  return (
    <div>
      <Card style={styles.recipeCard}>
        <CardHeader
          title={name}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardMedia expandable={true}><img src={imageURL} /></CardMedia>
        <CardTitle expandable={true} title="Ingredients" />
        {ingredients.map((ingredient, i) =>
          <CardText key={i} expandable={true}>#{i+1}. {ingredient}</CardText>
        )}
        <CardActions>
          <FlatButton onClick={toggleEditOpen} label="Edit" />
          <FlatButton onClick={deleteRecipe.bind(this, id)} label="Delete" />
        </CardActions>
      </Card>

      <ModalForm
        title="Edit a Recipe"
        isOpen={isOpen}
        toggleOpen={toggleEditOpen}
        onSubmit={onEditRecipe}
        id={id}
        />
    </div>
  )
}

RecipeItem.PropTypes = {
  toggleEditOpen: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  ingredients: PropTypes.array.isRequired,
  imageURL: PropTypes.string
}

export default RecipeItem;
