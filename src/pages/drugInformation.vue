<template>
    <div class="home">
        <div class="drug_information_div">
            <span>藥品信息</span>
            <span>Drug information</span>
        </div>

        <div v-if="loading">
            <img src="@/assets/images/loading.gif" alt="" class="loading_img">
        </div>
        <div v-else>
            <div class="info_div" v-if="JSON.stringify(info) !=='{}'">
                <h4 class="orange" v-if="info.numberVerify > 1"><img src="@/assets/images/warning.jpeg" alt="" style="width: 20px;
    vertical-align: middle;margin-bottom: 5px"> 提醒！该防伪码已被多次查询，谨防假冒！<br/>
                    本次是第{{info.numberVerify || 'n'}}次查询，首次防偽查詢日期 ：{{info.firstTime || '無'}}</h4>
                <h4 class="orange" v-else>首次防偽查詢日期 ：{{info.firstTime || '無'}}</h4>
                <h3 class="orange">此商品為正品</h3>
                <!--<p>{{info.firstTime}}</p>-->
                <h2 class="title">【產品名稱】</h2>
                <p>通用名：{{info.alias || '無'}}</p>
                <p>商品名：{{info.name || '無'}}</p>
                <p>英文名：{{info.code || '無'}}</p>
                <h2 class="title">【主要成分】</h2>
                <p>{{info.component || '無'}}</p>
                <h2 class="title">【性  狀】</h2>
                <p>{{info.character || '無'}}</p>
                <h2 class="title">【產品原理】</h2>
                <p>{{info.content || '無'}}</p>
            </div>
            <div class="info_div" v-else style="font-size: 14px">{{tip}}</div>
        </div>

    </div>
</template>
<script>
    export default {
        props: {

        },
        data () {
            return {
                info: {},
                param: this.$route.params.param,
                loading: false,
                tip: '暫無此商品信息'
            }
        },
        mounted(){
            window.addEventListener('beforeunload', (event) => {
                sessionStorage.setItem("isRefresh", true);

                // Cancel the event as stated by the standard.
                event.preventDefault();
                // Chrome requires returnValue to be set.
                event.returnValue = '';
            });
            window.addEventListener('pagehide', (event) => {
                sessionStorage.setItem("isRefresh", true);

                // Cancel the event as stated by the standard.
                event.preventDefault();
                // Chrome requires returnValue to be set.
                event.returnValue = '';
            });

            if (!sessionStorage.getItem('isRefresh')) {
                this.init()
            } else {
                this.tip = '刷新無效，請再次掃碼查看。'
            }
        },
        methods: {
            init(){
                this.loading = true;
                this.$axios.get(`/hon/security/get/${this.param}`).then(res => {
                    if (res.status === 200 && res.data.success === 'true') {
                        this.info = res.data.data;
                    } else {
                        this.$Message.error('請求失敗');
                    }
                    this.loading = false;
                }).catch(error => {
                    this.loading = false;
                    this.$Message.error(error || '請求失敗');
                })
            },
        }
    }
</script>
<style lang="scss" scoped>
    .drug_information_div {
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
    .info_div {
        width: 85%;
        margin: 32px auto;
        font-size: 14px;
        line-height: 2;
    }
    .title {
        color: $themeColor;
        margin-left: -1%;
    }
    .orange {
        color: #FF900E;
    }
    .loading_img {
        display: block;
        margin: 3rem auto;
    }
</style>
