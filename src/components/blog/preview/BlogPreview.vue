<template>
    <div class="blog-preview-barrier">
        <div class="header">
            <div class="img" v-if="blog.isShowBanner"><img :src="getMyBanner" alt=""></div>
            <div class="title">{{blog.title}}</div>
        </div>
        <div class="content">
            <p class="article">{{blog.previewContent}}</p>
            <div class="more" v-if="isAll" @click="readMore">
                <a>阅读全文</a>
            </div>
        </div>
        <div class="footer">
            <div class="author word-ellipsis">
                <i class="fa fa-user-o" aria-hidden="true"></i>
                <span>{{blog.author||'匿名'}}</span>
            </div>
            <div class="date">
                <i class="fa fa-calendar" aria-hidden="true"></i>
                <span>{{blog.updateTime}}</span>
            </div>
            <div class="tags word-ellipsis">
                <i class="fa fa-tags" aria-hidden="true"></i>
                <span v-for="tag in blog.tags">#{{tag}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import FrontConfig from "../../../config/FrontConfig"
    export default {
        name: "BlogPreview",
        props:{
            blog:Object,
         },
        mounted(){

        },
        computed:{
            getMyBanner(){
                var bannerImg = FrontConfig.blogBanners[Math.floor(Math.random() * FrontConfig.blogBanners.length)];
                return require('../../../static/img/blog_banner/' + bannerImg);
            }
        },
        methods:{
            readMore(){
                this.$router.push({ name: 'blogArticle', params: {id: this.blog.id, isReadable: true }})
            }
        },
        data(){
            return{
                isAll:true,
            }
        }
    }
</script>

<style scoped>
    .blog-preview-barrier {
        width: 90%;
        margin: 20px auto;
        background-color: rgba(42, 42, 42, 0.85);
    }
    .blog-preview-barrier:first-child{
        margin-top: 0;
    }
    .blog-preview-barrier .header {
        box-sizing: border-box;
        border-bottom: 1px solid rgba(104, 104, 104, 0.91);

    }
    .blog-preview-barrier .header .img {
        width: 100%;
        height: 150px;
        box-sizing: border-box;
        border-bottom: 1px solid rgba(67, 67, 67, 0.8);

    }
    .blog-preview-barrier .header img {
        width: 100%;
        height: 100%;
    }

    .blog-preview-barrier .header .title {
        text-align: left;
        padding-left: 15px;
        font-size: 27px;
        color: #4f98af;
        height: 50px;
        line-height: 50px;
    }
    .blog-preview-barrier .content .article{
        font-size: 20px;
        max-height: 6em;
        color: #dadada;
        line-height: 1.5em;
        font-family:STKaiti,LiSu,STXinwei;
        font-style: normal;
        text-align: left;
        text-indent: 2em;
        padding: 0 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        -webkit-line-clamp: 4;
    }
    .blog-preview-barrier .content .more{
        height: 25px;
        background-color: #2e2e2e;
        width: 80px;
        margin: 10px;

        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        color: rgba(157, 157, 157, 0.67);
    }
    .blog-preview-barrier .content .more:hover{
        cursor: pointer;
        background-color: #df9f19;
        color: white;
    }

    .blog-preview-barrier .footer {
        border-top: 1px solid rgba(104, 104, 104, 0.91);
        height: 50px;
        box-sizing: border-box;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        text-align: left;
        color: rgba(117, 117, 117, 0.77);
        font-size: 14px;
    }
    .blog-preview-barrier .footer .author,
    .blog-preview-barrier .footer .date,
    .blog-preview-barrier .footer .tags{
        margin-left: 10px;
    }
    .blog-preview-barrier .footer i{
        margin-right: 5px;
    }
    .blog-preview-barrier .footer .date{
        max-width: 140px;
        font-family: sans-serif;
    }
    .blog-preview-barrier .footer .tags span{
        margin-right:10px;
    }
</style>