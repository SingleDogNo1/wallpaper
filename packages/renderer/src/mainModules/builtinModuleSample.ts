
import fs from 'fs';

const fsExample = () => {
  fs.lstat(process.cwd(),(err,stats)=>{
    if(err){
      throw err
    }else{
      console.log(stats);
    }
  })
}
export default fsExample