import React, { PropTypes } from 'react';
import RecipeItem from './recipeItem';
import { Grid, Col, Row } from 'react-flexbox-grid';
import styles from '../styles/styles';

const RecipeList = ({
  toggleEditOpen,
  onDeleteRecipe,
  recipes,
  onEditRecipe
}) => {
  return (
    <Grid style={styles.recipeGrid}>
      <Row>
        {recipes.map(recipe =>
          <Col xs={12} md={4} lg={3} key={recipe.id}>
            <RecipeItem
              key={recipe.id}
              toggleEditOpen={toggleEditOpen}
              ingredients={recipe.ingredients}
              imageURL={recipe.imageURL}
              name={recipe.name}
              deleteRecipe={onDeleteRecipe}
              id={recipe.id}
              recipe={recipe}
              onEditRecipe={onEditRecipe}
              submitter={recipe.submitter} />
          </Col>
        )}
      </Row>
    </Grid>
  )
}

RecipeList.PropTypes = {
  toggleEditOpen: PropTypes.func.isRequired,
  onDeleteRecipe: PropTypes.func.isRequired,
  onEditRecipe: PropTypes.func.isRequired,
  recipes: PropTypes.array.isRequired
}

export default RecipeList;
