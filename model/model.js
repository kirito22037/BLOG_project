const connection=require('../connection');

var user=function(user){
    this.username=user.username;
    this.email=user.email;
    this.dob=user.dob;
    this.password=user.password;
};

user.create=function(new_user,result){
    connection.query("INSERT INTO user set ?",new_user,(err,res)=>{

        if(err)
        {
            //console.log("Error Occured due to:",err);
            result(err,null);
        }
        else
        {
            //console.log(res.insertId);
            result(null,res.insertId);
        }
    });
};

user.search=function(username,result){
    connection.query("SELECT * from user where username=?",username,(err,res)=>{

        if(err)
        {
            //console.log("Error ocured due to ",err);
            result(err,null);
        }
        else
        {
            //console.log(res);
            result(null,res);
        }
    });
};

user.showall=function(result){
    connection.query("SELECT * from user",(err,res)=>{
        if(err)
        {
            //console.log("Error occured due to ",err);
            result(null,err);
        }
        else
        {
            //console.log(res);
            result(res);
        }
    })
}

user.delete=function(username,result){
    connection.query("DELETE from user where username=?",username,(err,res)=>{
        if(err)
        {
            result(err,null);
        }
        else
        {
            result(null,res);
        }

    });
};

user.update=function(username,password,result){

    connection.query("UPDATE user SET password=? where username=?",[password,username],(err,res)=>{
        if(err)
        {
            result(err,null);
        }
        else
        {
            result(null,res);
        }
    });
};

module.exports=user;