import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

class CategoryList extends Component {

  renderCategory(category) {
    const styles = {
      padding: '1rem',
      cursor: 'pointer'
    };
    if (category === this.props.selectedCategory) {
      styles.backgroundColor = '#988afe';
    }
    return (
      <div key={category} style={styles} onClick={() => this.props.selectCategory(category)}>
        {category}
      </div>
    )
  }
  render() {
    const categoryItems = this.props.categories.map(
      (name) => this.renderCategory(name)
    );
    console.log(this.props);
    return (
      <div>
        <div>
          {categoryItems}
        </div>
      </div>
    )
  }
}

CategoryList.propTypes = {
  uid: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string),
  selectedCategory: PropTypes.string,
  selectCategory: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    uid: state.firebase.auth.uid,
    categories: state.firestore.ordered.categories ? state.firestore.ordered.categories.map(c => c.name) : [],
    selectedCategory: state.categories.selectedCategory,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    selectCategory: category => dispatch({ type: 'selectCategory', category })
  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => {
      if (!props.uid) return [];
      return [
        {
          collection: 'categories',
          where: [
            ['uid', '==', props.uid]
          ]
        }
      ]
    }
  )
)(CategoryList)