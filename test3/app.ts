 
const arr = [
    {
       'hole' : 1,
       'index' : 0
    },
    {
       'hole' : 0,
       'index' : 1
    },
    {
       'hole' : 0,
       'index' : 2
    },
    {
       'hole' : 0,
       'index' : 3
    },
    {
       'hole' : 1,
       'index' : 4
    },
    {
       'hole' : 0,
       'index' : 5
    },
    {
       'hole' : 1,
       'index' : 6
    },
    {
       'hole' : 0,
       'index' : 7
    },
    {
       'hole' : 2,
       'index' : 8
    },
    {
       'hole' : 1,
       'index' : 9
    }
 ];

const sortAndMap = (arr = []) => {
   const copy = arr.slice();
   const sorter = (b, a) => {

   return b['index'] - a['index'];
   };
   copy.sort(sorter);
   const res = copy.map(({hole, index}) => {

   if (hole === 0) {
      return 0; 
   } else if (index === 8) {
      index = 9;
   } else if (index === 9) {
      index = 8;
   }
   return console.log(index); 
});
   return res;
 };


sortAndMap(arr);    


    