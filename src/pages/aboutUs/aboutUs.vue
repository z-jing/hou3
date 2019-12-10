<template>
    <div class="">
        <div>
            <img src="@/assets/images/about_us_banner.png" alt="" width="100%">
        </div>
         <div class="about_us_div">
             <span>關於弘辰</span>
             <span>ABOUT US</span>
         </div>
        <Row class="company_profile">
            <!--<Col span="10">-->
            <!--<img width="100%" src="@/assets/images/logowithback.png" alt="">-->
            <!--</Col>-->

            <!--<Col span="11" offset="2">-->
            <!--<h2 class="title">關於弘辰</h2>-->
            <!--<span class="text">Company Profile</span>-->
            <!--<p class="content">「熱情、關懷、健康、穩健」是一成藥品的核心價值，我們期盼全體服務同仁和合作夥伴懷抱著熱情和對人性的關懷，提供高品質的產品和服務來滿足我們的顧客，希望藉由我們些微的努力，成為幸福企業典範並對創造健康社會和人生貢獻一份心力。</p>-->
            <!--</Col>-->
            <h2 class="title">公司簡介</h2>
            <span class="text">Company Profile</span>
            <p class="content">「熱情、關懷、健康、穩健」是一成藥品的核心價值，我們期盼全體服務同仁和合作夥伴懷抱著熱情和對人性的關懷，提供高品質的產品和服務來滿足我們的顧客，希望藉由我們些微的努力，成為幸福企業典範並對創造健康社會和人生貢獻一份心力。</p>
            <h2 class="title">公司地址</h2>
            <span class="text">Company Address</span>
            <p class="content"><Icon type="md-pin" /> 壹中市大安區中庒里南勢 街 89號</p>
        </Row>
        <!--<div  class="articleBlockStyle02">-->
            <!--<div class="Bbox_1c">-->
                <!--<div>-->
                    <!--<div class="blockTitle">-->
                        <!--<span>核心價值</span>-->
                        <!--<small>CORE VALUE</small>-->
                    <!--</div>-->
                    <!--<div class="flex4c">-->
                        <!--<div>-->
                            <!--<img src="@/assets/images/icon01.png">-->
                            <!--<h2>熱情</h2>-->
                        <!--</div>-->
                        <!--<div>-->
                            <!--<img src="@/assets/images/icon02.png">-->
                            <!--<h2>關懷</h2>-->
                        <!--</div>-->
                        <!--<div>-->
                            <!--<img src="@/assets/images/icon03.png">-->
                            <!--<h2>盡善</h2>-->
                        <!--</div>-->
                        <!--<div>-->
                            <!--<img src="@/assets/images/icon04.png">-->
                            <!--<h2>盡美</h2>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
    </div>
</template>
<script>
    export default {
        props: {

        },
        data () {
            return {

            }
        },
        methods: {

        }
    }
</script>
<style lang="scss" scoped>
    .about_us_div {
        width: 85%;
        margin: 32px auto;
        border-left: 2px solid $themeColor;
        span:first-child{
            font-size: 36px;
            font-weight: bolder;
            margin: 0 30px 0 10px;
        }
        span:nth-child(2){
            font-size: 20px;
            color: #b3afaf;
        }
    }
    .company_profile {
        width: 85%;
        margin: 60px auto;
        .title {
            font-size: 22px;
            margin-bottom: 10px;
        }
        .text {
            border-bottom: 2px solid $themeColor;
            margin-bottom: 10px;
            display: inline-block;
            font-size: 18px;
            color: #b3afaf;
            padding-bottom: 10px;
        }
        .content{
            line-height: 2.5;
            font-size: 16px;
            margin-bottom: 20px;
        }
    }
    .articleBlockStyle02{
        > * {
            position: relative;
            z-index: 1;
        }
        color: #fff;
        margin: 60px auto;
        background:url('../../assets/images/company_03.jpg') no-repeat center center;
        background-size: cover;
        background-attachment:fixed;
        min-height: 300px;
        padding: 57.6px;
        position: relative;
        &:after {
            background: rgba(78,184,181,0.5);
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: 0;
        }
        .blockTitle{
            margin-bottom: 16px;
            font-weight: bolder;
            font-size: 30px;
            small{
                display: block;
                font-size: 19px;
                font-weight: 300;
                letter-spacing: 1px;
            }
        }
        .Bbox_1c{
            width: 85%;
            margin: auto;
            text-align: center;
        }
        .flex4c{
            display: flex;
            justify-content: space-around;
            
            & > div{
                display: inline-block;
            }
        }
    }
</style>
