const File = ({name, searchValue}) => {

 const  getHighlightedText =(text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return <span>{parts.map(part => part.toLowerCase() === highlight.toLowerCase() ? <b style={{color: 'yellow'}}>{part}</b> : part)}</span>;
}

  if(searchValue) {
    return getHighlightedText(name, searchValue);

  } else {
    return name
  }
  };
export default File;