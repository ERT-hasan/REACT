const List = ({list}) =>{

   
    

    return   (
        <>
          {!list || list.length ===0 ?<h2>no student are here</h2>
                               :<h2> here are the studen</h2>}

        {list && list.length > 0 && <ol className="list-disc ml-10 mt-5 text-xl">
            {list.map(item => <li>{item}</li>)}
         </ol>}

   </>
);
};
export default List;