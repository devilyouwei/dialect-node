const db = require('./DB.js');
class Public{
    static province(request,response){
        let search = {
            level: 1
        }
        db.query('select * from area where ?', search).then(res=>{
            return response.json(res);
        })
    }
}
module.exports=Public
