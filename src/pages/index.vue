<template>
    <div class="home">
        <img width="100%" src="@/assets/images/banner.png" alt="">
        <!--<div class="example_exhibit">-->
            <!--<div>-->
                <!--<img src="@/assets/images/index-img-1.jpg" alt="">-->
                <!--<p>處方.指示用藥</p>-->
            <!--</div>-->
            <!--<div>-->
                <!--<img src="@/assets/images/index-img-2.jpg" alt="">-->
                <!--<p>機能食品</p>-->
            <!--</div>-->
            <!--<div>-->
                <!--<img src="@/assets/images/index-img-3.jpg" alt="">-->
                <!--<p>醫材.用品</p>-->
            <!--</div>-->
        <!--</div>-->
        <div class="about_us">
            <Row class="about_us_box">
                <Col span="11">
                <h2 class="about_us_title">關於弘辰動物保健</h2>
                <span class="about_us_text">ABOUT US</span>
                <p class="about_us_content">
                    本公司全稱：台灣弘辰動物藥品有限公司，成立於2019年，所營產品涵蓋了動物食品批發、藥品批發、用品批發等進口為主。初服用之外，台灣弘辰動物藥品有限公司還提供管理服務、仲介服務等優質服務。與NISSIN, Teika , Boise 等世界知名藥廠保持良好合作關係，且積極登記學名藥許可證和健康補充品以提升動物健康水準。
                </p>
                </Col>
                <Col span="11" offset="2">
                <img width="100%" src="@/assets/images/logowithback.png" alt="">
                </Col>
            </Row>
        </div>
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
        mounted(){

        },
        methods: {

        }
    }
</script>
<style lang="scss" scoped>
     .example_exhibit,.about_us_box {
         width: 85%;
         margin: 25px auto;
     }
    .example_exhibit {
        display: flex;
        justify-content: space-between;
        padding: 60px 0;
        &>div{
            display: inline-block;
            width: 28%;
            text-align: center;
        }
        img{
            width: 350px;
            height:260px;
        }
        p{
            font-size: 20px;
            margin-top: 10px;
        }
    }
    .about_us {
        background-color: #f7f8f8;
        padding: 20px 0;
    }
    .about_us_title {
        font-size: 26px;
        margin-bottom: 10px;
    }
    .about_us_text {
        border-bottom: 2px solid $themeColor;
        margin-bottom: 10px;
        display: inline-block;
        font-size: 18px;
        color: #b3afaf;
        padding-bottom: 10px;
    }
    .about_us_content {
        line-height: 2.5;
        font-size: 16px;
    }
</style>
