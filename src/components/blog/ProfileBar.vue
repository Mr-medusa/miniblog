<template>
    <div class="profile-bar">
        <div class="profile-barrier">
            <div class="head-portrait">
                <div class="face hvr-buzz"><a href="javascript:;"></a></div>
            </div>
            <div class="info">
                <h1 class="name">This</h1>
                <div class="mood">What if you are right,and they are wrong</div>
                <div class="nav">
                    <ul>
                        <li><a href="javascript:;" @click="goHome" class="hvr-wobble-top">主页</a></li>
                    </ul>
                </div>
                <div class="shortcut-menu">
                    <a href="javascript:;" class="hvr-wobble-top" @click="clickShowCatalog">日志 <i class="fa" :class="{'fa-arrow-right':isShowCatalog,' fa-arrow-left':!isShowCatalog}" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import EventHub from "../../utils/EventHub";
    export default {
        name: "ProfileBar",
        model:{
            event:'isShowCatalog',
        },
        data(){
            return{
                isShowCatalog:true,
            }
        },
        methods:{
            clickShowCatalog(){
                this.isShowCatalog = !this.isShowCatalog;
                this.$emit('isShowCatalog',this.isShowCatalog);
            },
            goHome(){
                this.$router.push(`/blog/preview_list/${EventHub.pageInfo.current}`);
            }
        }
    }
</script>

<style scoped>
    .head-portrait{
        flex: 1;
        max-height: 150px;
        height: 118px;
        background-color: rgb(5, 5, 5);
        position: relative;
    }
    .face{
        height: 118px;
        border-radius: 50%;
        box-shadow: 0 3px 5px #242425;
        overflow: hidden;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -59px;

    }
    .face a{
        display: inline-block;
        width: 120px;
        height: 120px;
        background: url("../../assets/img/tom.jpeg") no-repeat center;
        background-size: 100% 100%;
    }
    .info{
        flex: 1;
        height: 100%;
        padding-top: 80px;
        display: flex;
        flex-direction: column;
    }
    .info .nav,.info .shortcut-menu{
        font-size: 18px;
    }
    .info .name,.info .mood{
        font-family: kaushan_scriptregular;
    }
    .info .name{
        font-size: 30px;
        color: #d4515e;
        flex: 1;
        max-height: 40px;
    }
    .info .mood{
        color: #ff9b12;
        flex: 1;
        max-height: 30px;
    }
    .info .nav{
        flex: 1;
        max-height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .info .nav ul li{
        height: 30px;
        line-height:  30px;
    }
    .info .shortcut-menu{
        flex: 1;
        max-height: 30px;
        line-height: 30px;
    }
    .info .shortcut-menu i{
        font-size: 12px;
        margin-left: 5px;
    }
</style>