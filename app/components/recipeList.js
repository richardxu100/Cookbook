import React, { PropTypes } from 'react';
import RecipeItem from './recipeItem';
import { Grid, Col, Row } from 'react-flexbox-grid';
import styles from '../styles/styles';

const RecipeList = (props) => {
  return (
    <Grid style={styles.recipeGrid}>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <RecipeItem />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <RecipeItem />
        </Col>
      </Row>
    </Grid>

  )
}

RecipeList.PropTypes = {

}

export default RecipeList;
