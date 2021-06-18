import * as React from "react";
import {useState} from 'react';
import sampleData from "./data.json";
import File from './File';

const mapSampleData =(children, isExpanded, search) => {
  if(search){
    console.log(search);
  }
    return children.map((child) => {
            if(child.type === 'FOLDER') {
                child.isExpanded = isExpanded || false;
            }
            if(child.children) {
                mapSampleData(child.children, search)
            }
            if(search && 
             child.name && child.name === search) {
               console.log(child.name.indexOf(search));
              if(children.name) {
                children.isExpanded =true;
              }
              child.isExpanded = true;
            }
            return child;
        })
    }


const Folder = (props) => {
  const [folder, toggleFolder] = useState(0);

  return (
    <>
      {props.data.map((item) => (
        <>
          <div className={item.type === 'FOLDER' && "folder"}>
          {item.type === 'FOLDER' &&
           <button onClick={()=>toggleFolder(item.isExpanded = !item.isExpanded)}>{item.isExpanded? '-': '+'}</button> }
            {item.type === 'FOLDER' ? item.name: <File name={item.name} />}
            {item.isExpanded && item.children?.length && <Folder key={item.name} data={item.children} />}
          </div>
        </>
      ))}
    </>
  );
};

const Folders = (props) => {
  const [value, setValue] = useState('');

  const [data, onSearch] = useState(mapSampleData(sampleData, false));

  return (
    <div>
     <div> <input value={value} onChange={(e)=> setValue(e.target.value)} />
     <button onClick={()=> {onSearch(mapSampleData(sampleData, false, value))}}>Search</button>
     </div>
      Folders
      <Folder key={'chart'} data={data} />
    </div>
  );
};
export default Folders;