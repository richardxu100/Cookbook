import React, { PropTypes } from 'react';
import { Card, CardHeader, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ModalForm from '../containers/ModalForm';
import styles from '../styles/styles';
import { observer } from 'mobx-react';

const RecipeItem = observer(({
  toggleEditOpen,
  name,
  ingredients,
  imageURL,
  deleteRecipe,
  id,
  onEditRecipe,
  recipe,
  submitter
}) => {
  const overlayTitle = `By ${submitter.name}`;
  return (
    <div>
      <Card style={styles.recipeCard}>
        <CardHeader
          title={name}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardMedia overlay={<CardTitle title={overlayTitle} />}>
          <img src={imageURL} />
        </CardMedia>
        <CardTitle expandable={true} title="Ingredients" />
        {ingredients && ingredients.map((ingredient, i) =>
          <CardText key={i} expandable={true}>#{i+1}. {ingredient}</CardText>
        )}
        <CardActions>
          <FlatButton onClick={toggleEditOpen.bind(this, id)} label="Edit" />
          <FlatButton onClick={deleteRecipe.bind(this, id)} label="Delete" />
        </CardActions>
      </Card>

      <ModalForm
        title="Edit a Recipe"
        isOpen={recipe.isEditOpen}
        toggleOpen={toggleEditOpen}
        onSubmit={onEditRecipe}
        id={id}
        name={name}
        ingredients={ingredients}
        imageURL={imageURL}
        />
    </div>
  )
})

RecipeItem.PropTypes = {
  toggleEditOpen: PropTypes.func.isRequired,
  deleteRecipe: PropTypes.func.isRequired,
  onEditRecipe: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  ingredients: PropTypes.array.isRequired,
  imageURL: PropTypes.string,
  id: PropTypes.number.isRequired,
  recipe: PropTypes.object.isRequired
}

export default RecipeItem;
