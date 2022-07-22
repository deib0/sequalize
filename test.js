const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('deibo', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
  });
// 创建模型
class User extends Model {}
// 初始化 User
User.init({
    username:DataTypes.STRING,
    birthday:DataTypes.DATE
},{sequelize,modelName:'user'});
// 读表
async function run(){
    const users =await User.findAll()
    console.log(JSON.stringify(users))
    sequelize.close()
}
run()
// 同步到数据库
// sequelize.sync()
// 创建一条记录
/*     .then(()=>User.create({
        username:'deibo',
        birthday:new Date(1988,8,17)
    })) */
    // 打印记录
/*     .then(jane=>{
        console.log(jane.toJSON())
    }) */

