import * as React from "react";
import {useState} from 'react';
import sampleData from "./data.json";
import Folder from './Folder';

const haveFile = (json, search) => {
  return JSON.stringify(json).toLowerCase().includes(search.toLowerCase())
}

const reMapOnSearch =(data, search, expandedFolders) => {

  const secondDash = s =>  s.split('/', 2).join('/').length;

  let currentFolders = expandedFolders.map(ef => ef.slice(1,secondDash(ef)));

  expandedFolders =  expandedFolders.map(ef => ef.slice(secondDash(ef), ef.length));

  return data.map((child) => {
          if(child.type === 'FOLDER' && !search) {
              child.isExpanded = false;
          }
          if(search !== '') {

            if(child && haveFile(child,search)) {
              data.isExpanded = true;
              child.isExpanded = true;

              if(child.children && haveFile(child.children,search)) {
                reMapOnSearch(child.children, search, expandedFolders)
            }
            return child;
            } else {
              child.isExpanded = false;
              return child;
            }
          } else {

            child.isExpanded = false;
            if(currentFolders.length !==0 ) {

              for (let cf of currentFolders) {

                if (child.name === cf ) {
                  child.isExpanded = true;
                //  break;
                }
              }
            }
            if(child.children) {
              reMapOnSearch(child.children, search, expandedFolders)
          }
          return child;
          }
      })
  }

const Folders = ({expandedFolders}) => {
  const [searchValue, setSearchValue] = useState('');
  const [data, onSearch] = useState(reMapOnSearch(sampleData, searchValue, expandedFolders));

  return (
    <div>
     <div> <input value={searchValue} onChange={(e)=> setSearchValue(e.target.value)} />
     <button onClick={()=> {onSearch(reMapOnSearch(sampleData,searchValue, expandedFolders))}}>Search</button>
     {searchValue && <button onClick={()=>{ setSearchValue('');onSearch(reMapOnSearch(sampleData,searchValue, expandedFolders))}}>x</button>}
     </div>
      Folders
      <Folder data={data} searchValue={searchValue} />
    </div>
  );
};

export default Folders;