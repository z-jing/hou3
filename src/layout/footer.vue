<template>
    <div class="footer">
        <div class="footer_content">
            <section class="footer_logo">
                <h2>弘辰動物保健</h2>
            </section>
            <section class="footer_describe">
                <Row>
                    <Col span="15">
                        <div>一成具有完整的藥品行銷和查驗登記之經驗，並且與日、法等國藥廠合作經驗豐富。 我們希望與國際夥伴合作，針對預防醫學並將引進小眾市場用藥迅速引進國內，提升寵物的健康及生活品質，提供用藥的選擇性。</div>
                        <!--<div>-->
                            <!--關於我們-->
                        <!--</div>-->
                    </Col>
                    <Col span="6" offset="2">
                    <div><Icon type="md-bookmark" /> 台灣弘辰動物藥品有限公司</div>
                    <div><Icon type="md-pin" /> 臺中市大安區中庒里南勢厝路89號</div>
                    <!--<div><Icon type="md-call" />tel</div>-->
                    </Col>
                </Row>
            </section>
            <h3 class="about_us"><router-link to="/aboutUs">關於我們</router-link></h3>
        </div>
        <div class="copyright">
            <span>Copyright © 2019 弘辰動物保健 All Rights Reserved.</span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .footer_content {
        background-color: $themeColor;
        color: #fff;
    }
    .footer_logo,.footer_describe,.about_us {
        width: 85%;
        margin: auto;
        padding: 20px 0;
        font-size: 16px;
    }
    .footer_describe {line-height: 2}
    .copyright {
        background-color: #3d454b;
        line-height: 2.5rem;
        color: #fff;
        span {
            width: 85%;
            display: block;
            margin: auto;
        }
    }
    .about_us{
        font-size: 16px;
        a{
            color: #fff;
            /*line-height: 100px;*/
        }
    }
</style>
