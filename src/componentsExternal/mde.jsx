import * as React from "react";
import ReactMde from "react-mde";
import Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";

export default class Mde extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      tab: "write"
    };
    this.converter = new Showdown.Converter({
      tables: true,
      simplifiedAutoLink: true,
      strikethrough: true,
      tasklists: true
    });
  }

  handleValueChange = (value) => {
    this.setState({value});
  };

  handleTabChange = (tab) => {
    this.setState({tab})
  };

  render() {
    return (
      <div className="container">
        <ReactMde
          onChange={this.handleValueChange}
          onTabChange={this.handleTabChange}
          value={this.state.value}
          generateMarkdownPreview={markdown =>
            Promise.resolve(this.converter.makeHtml(markdown))}
          selectedTab={this.state.tab}
        />
        <div>{this.state.value}</div>
      </div>
    );
  }
}

