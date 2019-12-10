<template>
    <div class="header">
        <header class="header">
            <div class="topLink">
                <div class="dropdown_lang">
                    <Dropdown trigger="click">
                        <a href="javascript:void(0)">
                            Language
                            <Icon type="ios-arrow-down"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem>繁體中文</DropdownItem>
                            <DropdownItem>English</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>

            <div class="navBar">
                <div class="logo">
                    <router-link to="index">
                        <img class="logo" src="@/assets/images/logo.png" alt="弘辰動物保健">
                    </router-link>
                </div>
                <div class="about_us">
                    <router-link to="/aboutUs">關於我們</router-link>
                </div>
            </div>
        </header>
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
    .topLink{
        line-height: 2rem;
        background-color: $themeColor;
    }
    .dropdown_lang {
        width: 85%;
        margin: auto;
        text-align: right;
        a{
            color: #fff;
        }
    }
    .navBar {
        width: 85%;
        margin: 10px auto;
    }
    .logo,.about_us{
        display: inline-block;
    }
    .about_us{
        float: right;
        font-size: 18px;
        a{
            color: #000;
            line-height: 100px;
        }
    }
</style>
