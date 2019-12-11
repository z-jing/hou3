<template>
    <div class="one_step_box">
        <h3>◎在日光照射下，將標籤左右輕晃，能否看到如下圖所示特殊效果?(若要更明顯可開啟手電筒)</h3>
        <Row style="text-align: center;">
            <img src="@/assets/images/footer1.png" style="max-width: 100%; height:auto;">
        </Row>
        <p class="text-bold">A.“<img src="@/assets/images/getImg5.png" style="max-width:30px;vertical-align: middle;">”中的光圈隨著燈光的移動而移動，不管從每一個角度看皆清晰立體</p>
        <p class="text-bold">B.“BRIMOON”隨著燈光移動逐漸改變大小。</p>
        <RadioGroup v-model="vertical" vertical>
            <Radio label="apple">
                <Icon type="A"></Icon>
                <span>只看見A效果</span>
            </Radio>
            <Radio label="android">
                <Icon type="B"></Icon>
                <span>只看見B效果</span>
            </Radio>
            <Radio label="windows">
                <Icon type="AB"></Icon>
                <span>看見A、B兩種效果</span>
            </Radio>
            <Radio label="windows">
                <Icon type="none"></Icon>
                <span>無看見任何效果</span>
            </Radio>
        </RadioGroup>
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
//                this.$router.push({path: '/oneStep'});
            },
        }
    }
</script>
<style lang="scss" scoped>
    .one_step_box {
        width: 50%;
        margin: 50px auto;
        padding-left: 15px;
        padding-right: 15px;
        font-size:16px;
        color: #333;
    }
    .text-bold {
        font-weight: bolder;
        margin: 10px 0;
    }
</style>
