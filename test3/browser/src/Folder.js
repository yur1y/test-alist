import { useState } from 'react'
import File from './File';

const Folder = ({data, itemId, searchValue}) => {
    const [isToggled, toggleFolder] = useState(false);
  
    const toggleExpand = (item) => {
      item.isExpanded = !item.isExpanded;
      toggleFolder(!isToggled)
    }
  
    const isFolder = type =>  type === 'FOLDER';
    const isExpanded = item => item.isExpanded;
    return (
      <>
        {data.map((item, i) => (
          <>
          { (isExpanded(item) && searchValue || !searchValue) && <div key={`${item.name}${i}`} id={isFolder(item.type) && "folder"} >
            {isFolder(item.type) && (isExpanded(item) && searchValue || !searchValue) &&
             <button id={`${itemId? itemId:''}${i}`} onClick={(e)=> toggleExpand(item) } >
               {isExpanded(item)? '-': '+'}</button> }
              {isFolder(item.type) && !searchValue ? item.name: (!isFolder(item) && <File name={item.name || 'no name'} searchValue={searchValue} /> ) }
              {item.children?.length && 
              isExpanded(item)  && <Folder  data={item.children} itemId={i} searchValue={searchValue} />}
            </div> }
          </>
        ))}
      </>
    );
  };

  export default Folder;
