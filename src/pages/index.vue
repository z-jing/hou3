<template>
    <div class="home">
        <img width="100%" src="@/assets/images/index1.png" alt="">

        <Row class="pd-l bg-gray">
            <p style="margin: 15px">您購買的產品經系統比對判斷為<strong>正品</strong></p>
            <p style="margin: 15px">歡迎點擊“下一步”按鈕了解更多真偽辨別方法。</p>
            <div style="text-align: center;">
                <img src="@/assets/images/getImg3.png" alt="">
            </div>
            <div align="center">
                <Button @click="nextStep">下一步</Button>
            </div>
        </Row>

        <div class="footer_content">
            <Row class="pd-l">
                <p>
                    <span>
                        耀月企業股份有限公司 原廠資訊<br>
                        電話：+886 8 7620150&nbsp;<br>　　　
                        +886 8 7620151<br>
                        E-mail：<a href="mailto:service@brimoon.com">service@brimoon.com</a><br>
                        微信號：tel-88687620150<br>
                        地址：屏東縣長治鄉農園路5號(台灣農業生物科技園區)
                    </span>
                </p>
            </Row>
            <Row class="bg-gray pd-l">
                <Col span="7">
                <img src="@/assets/images/footer1.png" style="max-width: 100%; height:auto;">
                </Col>
                <Col span="16" offset="1">
                <div><span style="font-size:16px;">1. “<img src="@/assets/images/getImg5.png" style="max-width:30px;vertical-align: middle;">”為360°全可視水晶立體浮雕效果，內有光圈會隨著燈光的移動而移動。 (假標模糊無立體感，無360°全可視效果，不會隨著光線變化。)</span></div>
                <div><span style="font-size:16px;">2. “BRIMOON”隨著燈光移動逐漸改變大小。 (假標BRIMOON非常粗糙、網點大、變化死板不會逐漸改變大小。)</span></div>
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
            nextStep(){
                this.$router.push({path: '/oneStep'});
            },
        }
    }
</script>
<style lang="scss" scoped>
    .home {
        width: 80%;
        margin: auto;
        padding-left: 15px;
        padding-right: 15px;
    }
    .pd-l{
        padding: 30px;
        color: #333;
        font-size:16px;
    }
    .bg-gray {
        background-color: #ced8e1;
    }
</style>
