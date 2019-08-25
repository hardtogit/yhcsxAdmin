import React from 'react';
import { Tag, Input, Icon } from 'antd';
import './index.less';

class EditableTagGroup extends React.Component {
  state = {
    tags: [],
    inputVisible: false,
    activeTag:'',
    activeIndex:undefined,
    inputValue: ''
  };
  componentWillReceiveProps(nextProps){
    if('value' in nextProps){
      this.setState({
        tags:nextProps.value
      });
    }
  }
  handleClose = removedTag => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    this.setState({ tags });
    if(this.props.onChange){
      this.props.onChange(tags);
    }
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };
  handleTagChange = e => {
    this.setState({ activeTag: e.target.value });
  };
  handleInput=(tag,index)=>{
      this.setState({
        activeTag:tag,
        activeIndex:index
      },()=>{this.tagInput.focus();});
  }

  handleInputConfirm = () => {
    const { inputValue } = this.state;
    let { tags } = this.state;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log(tags);
    this.setState({
      tags,
      inputVisible: false,
      inputValue: ''
    });
    if(this.props.onChange){
      this.props.onChange(tags);
    }
  };
  handleTagConfirm = () => {
    const { activeTag,activeIndex } = this.state;
    let { tags } = this.state;
    tags[activeIndex]=activeTag;
    console.log(tags);
    this.setState({
      tags,
      activeTag: '',
      activeIndex: undefined
    });
    if(this.props.onChange){
      this.props.onChange(tags);
    }
  };

  saveInputRef = input => (this.input = input);

  render() {
    const { tags, inputVisible, inputValue,activeIndex,activeTag } = this.state;
    const {maxLength=1000,limit=100}=this.props;
    return (
      <div>
        {tags.map((tag,index) => {
          let tagElem;
          if(index===activeIndex){
             tagElem =(<Input
                 ref={(tagInput)=>{this.tagInput=tagInput;}}
                 type="text"
                 size="small"
                 maxLength={maxLength}
                 style={{ width: 78 }}
                 value={activeTag}
                 onChange={this.handleTagChange}
                 onBlur={this.handleTagConfirm}
                 onPressEnter={this.handleTagConfirm}
                       />);
          }else {
            tagElem = (
              <Tag key={tag} closable onClick={()=>{this.handleInput(tag,index);}}  onClose={(e) =>{e.stopPropagation(); this.handleClose(tag);}}>
                {tag}
              </Tag>
            );
          }

          return tagElem;

        })}
        {inputVisible && (
          <Input
              ref={this.saveInputRef}
              type="text"
              size="small"
              maxLength={maxLength}
              style={{ width: 78 }}
              value={inputValue}
              onChange={this.handleInputChange}
              onBlur={this.handleInputConfirm}
              onPressEnter={this.handleInputConfirm}
          />
        )}
        {(!inputVisible&&tags.length<limit) && (
          <Tag onClick={this.showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
            <Icon type="plus" /> 新增
          </Tag>
        )}
      </div>
    );
  }
}
export default EditableTagGroup;
