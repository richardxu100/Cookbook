import React, { Component } from 'react';
import '../styles/style.sass';
import RecipeList from '../components/recipeList';
import ModalForm from './ModalForm';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import styles from '../styles/styles';

export default class RecipeContainer extends Component {
	render() {
		return (
			<div>
				<RecipeList />
				<ModalForm title="Add a Recipe" />
				<ModalForm title="Edit a Recipe" /> {/* the open value on this dialog (toggleEditOpen) will be triggered by the edit button */}
				<FloatingActionButton style={styles.floatingActionButton}>
					<ContentAdd />
				</FloatingActionButton>
			</div>
		)
	}
}
