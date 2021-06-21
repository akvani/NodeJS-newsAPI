const dao=require('./news.dao')

const newsbycategory = async (category) => {
    //console.log(category +" from controller")
    return await dao.getbycategory(category);

}

module.exports={ newsbycategory }