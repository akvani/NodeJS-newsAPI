let config ={
    WWW_PORT: (process.env.PORT || 8080),
    NewsAuth_URL:(process.env.NewsAuth_URL || "http://localhost:8010/"),
    NewsDB_URL:(process.env.NewsDB_URL || "http://localhost:8020/"),
    NewsSource_URL:(process.env.NewsSource_URL || "http://localhost:8030/"),
    NewsUI_URL:(process.env.NewsUI_URL || "http://localhost:8040/")
}

module.exports= config