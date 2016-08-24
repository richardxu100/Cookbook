import React, { PropTypes } from 'react';
import RecipeItem from './recipeItem';
import { Grid, Col, Row } from 'react-flexbox-grid';
import styles from '../styles/styles';

const RecipeList = ({ toggleEditOpen, onDeleteRecipe, recipes }) => {
  return (
    <Grid style={styles.recipeGrid}>
      <Row>
        {recipes.map(recipe =>
          <Col xs={12} md={6} lg={4} key={recipe.id}>
            <RecipeItem
              toggleEditOpen={toggleEditOpen}
              ingredients={recipe.ingredients}
              imageURL={recipe.imageURL}
              name={recipe.name}
              deleteRecipe={onDeleteRecipe}
              id={recipe.id} />
          </Col>
        )}
      </Row>
    </Grid>
  )
}

RecipeList.PropTypes = {
  toggleEditOpen: PropTypes.func.isRequired,
  recipes: PropTypes.array.isRequired
}

export default RecipeList;
