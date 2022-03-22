import { Fragment, useState } from "react";
import AddCategory from "./addCategory/addCategory";
import GifGrid from "./gifGrid/gifGrid";


export default function GifExpertApp() {

    const [category, setCategory] = useState(['Dragon Ball']);

  return (
    <Fragment>
        <h2>GifExpertApp</h2>
        <AddCategory setCategory={setCategory} ></AddCategory>
        <hr />
        <ol>
            {category.map(c => 
                    <GifGrid
                         key={c} 
                         category={c}/> 
            )}
        </ol>
    </Fragment>
  )
}
