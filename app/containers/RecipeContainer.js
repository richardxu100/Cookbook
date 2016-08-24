import React, { Component } from 'react';
import '../styles/style.sass';
import RecipeList from '../components/recipeList';
import ModalForm from './ModalForm';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import styles from '../styles/styles';
import { observer } from 'mobx-react';

@observer
export default class RecipeContainer extends Component {
	render() {
		const { toggleEditOpen, isEditOpen, isAddOpen, toggleAddOpen, handleAddRecipe, handleEditRecipe, handleDeleteRecipe, recipes } = this.props.store;
		return (
			<div>
				<RecipeList
					toggleEditOpen={toggleEditOpen}
					recipes={recipes}
					onDeleteRecipe={handleDeleteRecipe}
					/>
				<ModalForm
					title="Add a Recipe"
					isOpen={isAddOpen}
					toggleOpen={toggleAddOpen}
					onSubmit={handleAddRecipe}
					/>
				<ModalForm
					title="Edit a Recipe"
					isOpen={isEditOpen}
					toggleOpen={toggleEditOpen}
					onSubmit={handleEditRecipe}
					/> {/* the open value on this dialog (toggleEditOpen) will be triggered by the edit button */}
				<FloatingActionButton
					style={styles.floatingActionButton}
					onTouchTap={toggleAddOpen}>
					<ContentAdd />
				</FloatingActionButton>
			</div>
		)
	}
}
