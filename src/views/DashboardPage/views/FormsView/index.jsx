import React from "react";
import { styles } from "./styles";
import {List, ListItem, withStyles} from "@material-ui/core";
import { connect } from "react-redux";
import { addField } from "../../redux/actions";

const mapDispatchToProps = dispatch => ({
  addField: field => dispatch(addField(field))
});

const mapStateToProps = state => {
  return { fields: state.dashboardReducer.fields };
};


class FormsView extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    // const { title } = this.state;
    // const id = uuidv1();
    // this.props.addArticle({ title, id });
    // this.setState({ title: "" });
  };

  handleAdd = () => {
    const title = "ex1";
    const text = "ex2";
    const id = 10;
    this.props.addField({title, text, id});
  };

  render() {
    const { classes } = this.props;
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <List>
            {this.props.fields.map((field, key) => {
              return (
                <ListItem key={key}>
                  <input type="text" name="title" value={field.title}/>
                  <input type="text" name="text" value={field.text}/>
                </ListItem>
              )
            })}
          </List>
          <button onClick={this.handleAdd}>add</button>
          <button type="submit">send</button>
        </form>
      </div>
    )
  }


}

const styledView = withStyles(styles)(FormsView);
export default connect(mapStateToProps, mapDispatchToProps)(styledView);