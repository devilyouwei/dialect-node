const mysql = require('mysql2');
const config = require('../dbconfig.json');
let pool = mysql.createPool(config);

let db = {
    query: function(sql,opts){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,conn){
                if(err){  
                    return reject(err)
                }else{  
                    conn.query(sql,opts,function(err,results,fields){  
                        //释放连接  
                        conn.release();  
                        //事件驱动回调  
                        if(err) return reject(err)
                        else return resolve(results);
                    });  
                }  
            })
        });
    }
}


module.exports=db;
